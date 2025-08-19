import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Feedback_wrapperStyles = css`
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: center;
  justify-content: center;
  gap: 30px;
  width: 600px;
  height: fit-content;
  border: 1px solid white;
  border-radius: 10px;
  padding: 30px;
  background: linear-gradient(to bottom, rgb(0, 0, 0), rgb(38, 38, 123));
  color: white;
  box-shadow: 0 0 50px rgb(195, 206, 248);
`;

export const FeedbackWrapper = styled.div`
  ${Feedback_wrapperStyles}
`;

export const FeedbackControl = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
`;

export const ButtonWithCountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

export const Count = styled.p`
  font-size: 40px;
  color: white;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const ImageControl = styled.div`
  width: 70px;
  height: 70px;
  cursor: pointer;
`;