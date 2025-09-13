import styled from "@emotion/styled";

export const CardComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  min-width: 470px;
  min-height: fit-content;
  height: 150px;
  border: 1px solid black;
  padding: 60px;
  border-radius: 4px;
  background-color: white;
`;

export const CardTitle = styled.p`
  font-size: 20px;
  color: rgb(18, 109, 162);
  font-weight: bold;
`;
export const CardInfo = styled.a`
  font-size: 18px;
  color: black;
  text-decoration: none;
`;
