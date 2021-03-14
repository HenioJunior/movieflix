export const CLIENT_ID = 'movieflix';
export const CLIENT_SECRET = 'movieflix123';

export type LoginResponse = {
  access_token: string;
  expires_in: number;
  scope: string;
  token_type: string;
  userFirstName: string;
  userUserId: number;
}

export const saveSessionData = (loginResponse: LoginResponse) => {
  localStorage.setItem('authData', JSON.stringify(loginResponse));

}