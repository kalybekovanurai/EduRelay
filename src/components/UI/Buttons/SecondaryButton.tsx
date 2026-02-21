import styled from "styled-components";

export const SecondaryButton = styled.button`
  padding: 12px 20px;
  border-radius: ${({ theme }) => theme.radius.md};
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
  cursor: pointer;
  transition: 0.2s ease;
  color: #475569;

  &:hover {
    background: #f1f5f9;
  }
`;
