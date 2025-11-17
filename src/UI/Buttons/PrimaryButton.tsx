import styled from "styled-components";

export const PrimaryButton = styled.button`
  padding: 12px 20px;
  border-radius: ${({ theme }) => theme.radius.md};
  border: none;
  background: ${({ theme }) => theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  font-weight: ${({ theme }) => theme.fonts.weight.semibold};
  font-size: 15px;
  cursor: pointer;
  transition: 0.25s ease;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadow.button};
  }
`;
