import styled from "@emotion/styled";

export const CardComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  min-width: 470px;
  min-height: fit-content;
  height: 150px;
  border: 1px solid black;
  padding: 60px;
  border-radius: 4px;
  background-color: white;
`;

export const CardTitle = styled.p`
  font-size: 15px;
  color: rgba(108, 108, 108, 1);

`;

export const CardInfo = styled.a`
  font-size: 29px;
  color: #3d3c3cff;
  font-weight: bold;
`;
