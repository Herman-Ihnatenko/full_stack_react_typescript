export interface ROUTES_DATA {
  CREATE_EMPLOYEE: string;
  EMPLOYEES: string;
  NOT_FOUND: string;
}

export const ROUTES: ROUTES_DATA = {
  CREATE_EMPLOYEE: "/createEmployee",
  EMPLOYEES: "/employees",
  NOT_FOUND: "*",
};

export enum NAV_MENU_ROUTES {
  "Create Employee" = "/createEmployee",
  Employees = "/employees",
};


