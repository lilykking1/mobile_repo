import axios from 'axios';
import {
  authStorage,
  RevalidateTokenStorageKeys,
  AuthenticationStorageKeys,
} from '@app/storage';
import { AUTH_TOKEN_ENDPOINT } from '@env';

import { TokenResponse } from './types';

const revalidateToken = async (): Promise<string | null> => {
  const refreshToken = authStorage.getString(
    AuthenticationStorageKeys.REFRESH_TOKEN
  );
  try {
    const revalidateTokenResponse: TokenResponse = await axios.post(
      AUTH_TOKEN_ENDPOINT,
      {
        refreshToken,
      }
    );

    // set mmkv persistent storage with encrypted tokens from revalidation
    authStorage.set(
      RevalidateTokenStorageKeys.ACCESS_TOKEN,
      revalidateTokenResponse.data.accessToken
    );
    // Refresh Token does not need to be set, and comes back empty from auth/token so do not change anything in storage
    authStorage.set(
      RevalidateTokenStorageKeys.ID_TOKEN,
      revalidateTokenResponse.data.idToken
    );
    authStorage.set(
      RevalidateTokenStorageKeys.EXPIRES_IN,
      revalidateTokenResponse.data.expiresIn
    );

    return 'Refreshed Token';
  } catch (error) {
    const { data } = error.response;
    throw new Error(data);
  }
};

export default revalidateToken;
