import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 600px;
  height: 400px;
  padding: 30px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: rgba(2, 19, 114, 0.9);
  box-shadow: 0 0 30px rgba(255, 255, 255, 1);
  position: relative;
`;

export const Text = styled.p`
  font-size: 30px;
  color: blue;
`;

export const MainText = styled.p`
  font-size: 30px;
  font-weight: bold;
  color: red;
`;

export const ButtonControl = styled.div`
  position: absolute;
  bottom: 20px;
  left: 25px;
  width: 550px;
`;
