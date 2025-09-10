export interface ROUTES_DATA {
  CREATE_EMPLOYEE: string;
  EMPLOYEES: string;
  // LOGIN: string;
  // CLIENTS: string;
  // AMAZON: string;
  // GOOGLE: string;
  // FACEBOOK: string;
  NOT_FOUND: string;
}

export const ROUTES: ROUTES_DATA = {
  CREATE_EMPLOYEE: "/createEmployee",
  EMPLOYEES: "/employees",
  // LOGIN: "/login",
  // CLIENTS: "/clients",
  // AMAZON: "/clients/amazon",
  // GOOGLE: "/clients/facebook",
  // FACEBOOK: "/clients/google",
  NOT_FOUND: "*",
};

export enum NAV_MENU_ROUTES {
  "Create Employee" = "/createEmployee",
  Employees = "/employees",
}