import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import CreateEmployee from "../CreateEmployee/CreateEmployee";
import Employees from "../Employees/Employees";
import { EmployeeContext } from "../CreateEmployee/CreateEmployee";
import { type UserData } from "../CreateEmployee/types";
import { ROUTES } from "../constants/navMenuRoutes";

function EmployeeMain() {
  const [userData, setUserData] = useState<UserData | undefined>(undefined);

  

  return (
    <EmployeeContext.Provider value={{ userData, setUserData }}>
      <Routes>
        <Route path={ROUTES.CREATE_EMPLOYEE} element={<CreateEmployee />} />
        <Route path={ROUTES.EMPLOYEES} element={<Employees />} />
      </Routes>
    </EmployeeContext.Provider>
  );
}

export default EmployeeMain;