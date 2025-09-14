import { CardComponent, CardInfo, CardTitle } from "./styles";
import { useContext } from "react";
import { EmployeeContext } from "pages/UserApp/CreateEmployee/CreateEmployee";

function Card() {
  const { userData, setUserData } = useContext(EmployeeContext);

  return (
    <CardComponent>
     <CardTitle>Name</CardTitle>
  <CardInfo>{userData?.name}</CardInfo>

  <CardTitle>Surname</CardTitle>
  <CardInfo>{userData?.surname}</CardInfo>

  <CardTitle>Age</CardTitle>
  <CardInfo>{userData?.age}</CardInfo>

  <CardTitle>Job Position</CardTitle>
  <CardInfo>{userData?.jobPosition}</CardInfo>
      {/* {webPage.map((page: string) => (
        <CardInfo href={page}>{page}</CardInfo>
      ))} */}
    </CardComponent>
  );
}
export default Card;
