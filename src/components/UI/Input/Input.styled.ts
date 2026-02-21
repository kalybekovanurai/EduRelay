import styled, { css } from "styled-components";

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;т
`;

export const IconWrapper = styled.span`
  pointer-events: none;
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #c4c4c4;
  display: flex;
  align-items: center;
`;

type StyledInputProps = {
  $hasIcon?: boolean;
};

export const StyledInput = styled.input<StyledInputProps>`
  height: 36px;
  width: 100%;
  border-radius: 6px;
  border: 1px solid rgba(196, 196, 196, 1);
  padding: 0 12px;
  font-size: 16px;
  color: black;
  transition: border-color 0.2s;

  &::placeholder {
    color: #c4c4c4;
  }

  &:hover {
    border-color: rgba(130, 130, 130, 1);
  }

  &:focus {
    border-color: rgba(130, 130, 130, 1);
    outline: none;
    box-shadow: none;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  ${({ $hasIcon }) =>
    $hasIcon &&
    css`
      padding-left: 36px;
    `}
`;