export interface TokenRequest {
  refreshToken: string;
}

export interface TokenResponse {
  data: {
    accessToken: string;
    refreshToken: string;
    idToken: string;
    expiresIn: number;
  };
}
