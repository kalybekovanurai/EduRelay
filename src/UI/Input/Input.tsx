import { forwardRef, type InputHTMLAttributes } from "react";
import { InputWrapper, StyledInput } from "./Input.styled";

type InputProps = {
  icon?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ icon, disabled, ...props }, ref) => {
    return (
      <InputWrapper>
        <StyledInput ref={ref} disabled={disabled} $hasIcon={icon} {...props} />
      </InputWrapper>
    );
  },
);

Input.displayName = "Input";