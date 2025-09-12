import { CardComponent, CardTitle, CardInfo } from "./styles";
import { type CardProps } from "./types";
import { useContext } from "react";
import { EmployeeContext } from "pages/UserApp/CreateEmployee/CreateEmployee"

function Card({ name = "", surname = "", age = "", jobPosition = "" }: CardProps) {
    const {userData, setUserData} = useContext(EmployeeContext)
  return (
    <CardComponent>
      <CardInfo>Name{name} </CardInfo>
      <CardInfo>Surname{surname}</CardInfo>
      <CardInfo>Age{age}</CardInfo>
      <CardInfo>Job Position{jobPosition}</CardInfo>
      {/* {webPage.map((page: string) => (
        <CardInfo href={page}>{page}</CardInfo>
      ))} */}
    </CardComponent>
  );
}
export default Card;

