export interface AuthenticationRequest {
  email: string;
  password: string;
}

export interface AuthenticationResponse {
  data: {
    accessToken: string;
    refreshToken: string;
    idToken: string;
    expiresIn: number;
  };
}
