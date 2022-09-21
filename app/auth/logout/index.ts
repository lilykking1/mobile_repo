import axios from 'axios';

import { authStorage, AuthenticationStorageKeys } from '@app/storage';
import { AUTH_LOGOUT_ENDPOINT } from '@env';

const logout = async (): Promise<void> => {
  const accessToken = authStorage.getString(
    AuthenticationStorageKeys.ACCESS_TOKEN
  );

  try {
    await axios.get(`${AUTH_LOGOUT_ENDPOINT}${accessToken}`);
  } catch (err) {
    throw new Error('Unable to logout');
  }
};

export default logout;
