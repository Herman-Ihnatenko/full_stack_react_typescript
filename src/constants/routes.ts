export interface ROUTES_DATA {
  HOME: string;
  CONTACT_US: string;
  ABOUT: string;
  LOGIN: string;
  CLIENTS: string;
  AMAZON: string;
  GOOGLE: string;
  FACEBOOK: string;
  NOT_FOUND: string;
}
export const ROUTES: ROUTES_DATA = {
  HOME: "/",
  CONTACT_US: "/contactUs",
  ABOUT: "/about",
  LOGIN: "/login",
  CLIENTS: "/clients",
  AMAZON: "/clients/amazon",
  GOOGLE: "/clients/facebook",
  FACEBOOK: "/clients/google",
  NOT_FOUND: "*",
};
export enum NAVIGATION_MENU_ROUTES {
  Home = "/",
  Contact_Us = "/contactUs",
  About = "/about",
  Login = "/login",
  Clients = "/clients",
}