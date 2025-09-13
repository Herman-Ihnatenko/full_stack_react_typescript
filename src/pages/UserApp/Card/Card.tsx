import { CardComponent, CardInfo } from "./styles";
import { useContext } from "react";
import { EmployeeContext } from "pages/UserApp/CreateEmployee/CreateEmployee";

function Card() {
  const { userData, setUserData } = useContext(EmployeeContext);

  return (
    <CardComponent>
      <CardInfo>Name{userData?.name} </CardInfo>
      <CardInfo>Surname{userData?.surname}</CardInfo>
      <CardInfo>Age{userData?.age}</CardInfo>
      <CardInfo>Job Position{userData?.jobPosition}</CardInfo>
      {/* {webPage.map((page: string) => (
        <CardInfo href={page}>{page}</CardInfo>
      ))} */}
    </CardComponent>
  );
}
export default Card;
