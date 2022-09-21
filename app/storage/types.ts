export enum AuthenticationStorageKeys {
  ACCESS_TOKEN = 'user.accessToken',
  REFRESH_TOKEN = 'user.refreshToken',
  ID_TOKEN = 'user.idToken',
  EXPIRES_IN = 'user.expiresIn',
  EMAIL = 'user.email',
}

export enum RegisterStorageKeys {
  AUTH_ID = 'user.id',
  EMAIL = 'user.email',
}

export enum RevalidateTokenStorageKeys {
  ACCESS_TOKEN = 'user.accessToken',
  ID_TOKEN = 'user.idToken',
  EXPIRES_IN = 'user.expiresIn',
}
