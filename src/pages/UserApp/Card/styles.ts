import styled from "@emotion/styled";

export const CardComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  min-width: 590px;
  max-width: fit-content;
  min-height: 470px;
  max-height: fit-content;
  border: 1px solid black;
  padding: 60px;
  border-radius: 4px;
  background-color: white;
`;

export const CardTitle = styled.p`
  font-size: 15px;
  padding-bottom: 5px;
  color: rgba(108, 108, 108, 1);

`;

export const CardInfo = styled.a`
  font-size: 29px;
  color: #3d3c3cff;
  font-weight: bold;
`;

export const CardInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
