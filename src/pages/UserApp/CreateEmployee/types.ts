import { type Dispatch, type SetStateAction } from "react";

export enum EMPLOYEE_FORM_VALUES {
  NAME = "name",
  SURNAME = "surname",
  AGE = "age",
  "JOB POSITION" = "jobPosition",
}

export interface UserData {
  name: string;
  surname: string;
  age: string;
  jobPosition: string;
}

export interface UserDataContext {
  userData: UserData | undefined;
  setUserData: Dispatch<SetStateAction<UserData | undefined>>;
}
