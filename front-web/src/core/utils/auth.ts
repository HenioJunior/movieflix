import jwtDecode from "jwt-decode";
import { Role } from "./../types/types";

export const CLIENT_ID = 'movieflix';
export const CLIENT_SECRET = 'movieflix123';


export type LoginResponse = {
  access_token: string;
  expires_in: number;
  scope: string;
  token_type: string;
  userName: string;
  userId: number;
  refresh_token: string;
}

type AccessToken = {
  exp: number;
  user_name: string;
  authorities: Role[];
}

export const saveSessionData = (loginResponse: LoginResponse) => {
  localStorage.setItem('authData', JSON.stringify(loginResponse));

}

export const getSessionData = () => {
  const sessionData = localStorage.getItem('authData') ?? '{}';
  const parsedSessionData = JSON.parse(sessionData);
  return parsedSessionData as LoginResponse; //typecast
}

export const logout = () => {
  localStorage.removeItem('authData');
}

export const getAccessTokenDecoded = () => {
  const sessionData = getSessionData();
  const tokenDecoded = jwtDecode(sessionData.access_token);
  return tokenDecoded as AccessToken;
}

export const isMember = () => {
  return getAccessTokenDecoded().authorities.includes('ROLE_MEMBER'); 
}