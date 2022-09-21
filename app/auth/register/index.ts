import axios from 'axios';
import { authStorage, RegisterStorageKeys } from '@app/storage';
import { AUTH_REGISTER_ENDPOINT } from '@env';

import { RegisterAccountRequest, RegisterAccountResponse } from './types';

const register = async ({
  name,
  email,
  password,
  confirmPassword,
  emailOptedIn,
}: RegisterAccountRequest): Promise<string | null> => {
  try {
    const registerResponse: RegisterAccountResponse = await axios.post(
      AUTH_REGISTER_ENDPOINT,
      {
        firstName: name.split(' ')[0],
        lastName: name.split(' ')[1],
        email,
        password,
        confirmPassword,
        emailOptedIn,
      }
    );

    // set mmkv persistent storage with register data
    authStorage.set(RegisterStorageKeys.AUTH_ID, registerResponse.data.id);
    authStorage.set(RegisterStorageKeys.EMAIL, registerResponse.data.email);

    return 'Register Success';
  } catch (error) {
    const { data } = error.response;

    throw new Error(data);
  }
};

export default register;
