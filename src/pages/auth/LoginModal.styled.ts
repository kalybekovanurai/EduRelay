import styled from "styled-components";

export const ModalTitle = styled.h2`
  margin: 0 0 20px;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const ModalContent = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.white};
  padding: 32px;
  width: 100%;
  max-width: 380px;
  border-radius: 18px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
  animation: fadeIn 0.25s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;

  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.gray};

  &:hover {
    color: ${({ theme }) => theme.colors.black};
  }
`;
