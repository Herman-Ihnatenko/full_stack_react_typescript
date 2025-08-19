import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Input_WrapperStyles = css`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const InputWrapper = styled.div`
  ${Input_WrapperStyles}
`;

export const InputLabel = styled.label`
  font-size: 16px;
  color: hsl(0, 0%, 44%);
`;

export const InputField = styled.input`
  width: 100%;
  height: 50px;
  border: 1px solid #3f3f3f;
  border-radius: 4px;e
  padding: 12px;
  outline: none;
  &::placeholder {
    color: #6f6f6f;
    font-size: 16px;
  }
`;