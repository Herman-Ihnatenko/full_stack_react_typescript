import { type Dispatch, type SetStateAction } from "react";

export enum EMPLOYEE_FORM_VALUES {
  NAME = "name",
  SURNAME = "surname",
  AGE = "age",
  "JOB POSITION" = "jobPosition",
}

export interface UserData {
  fullName: string;
  age: number;
  jobPosition: string;
}

export interface UserDataContext {
  userData: UserData | undefined;
  setUserData: Dispatch<SetStateAction<UserData | undefined>>;
}
