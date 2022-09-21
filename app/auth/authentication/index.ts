import axios from 'axios';
import { authStorage, AuthenticationStorageKeys } from '@app/storage';
import { AUTH_AUTHENTICATION_ENDPOINT } from '@env';

import { AuthenticationRequest, AuthenticationResponse } from './types';

const authentication = async ({
  email,
  password,
}: AuthenticationRequest): Promise<string | null> => {
  try {
    const loginResp: AuthenticationResponse = await axios.post(
      AUTH_AUTHENTICATION_ENDPOINT,
      {
        email,
        password,
      }
    );

    // set mmkv persistent storage with encrypted tokens from authentication
    authStorage.set(
      AuthenticationStorageKeys.ACCESS_TOKEN,
      loginResp.data.accessToken
    );
    authStorage.set(
      AuthenticationStorageKeys.REFRESH_TOKEN,
      loginResp.data.refreshToken
    );
    authStorage.set(AuthenticationStorageKeys.ID_TOKEN, loginResp.data.idToken);
    authStorage.set(
      AuthenticationStorageKeys.EXPIRES_IN,
      loginResp.data.expiresIn
    );
    authStorage.set(AuthenticationStorageKeys.EMAIL, email);

    return 'Login Success';
  } catch (error) {
    const { data } = error.response;
    throw new Error(data);
  }
};

export default authentication;
