import styled from "styled-components";

export const ModalTitle = styled.h2`
  margin: 0 0 20px;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  gap: 12px;

  background: ${({ theme }) => theme.colors.white};
  padding: 32px;
  width: 480px;
  max-width: 90%;
  border-radius: 18px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);

  /* Планшет */
  @media (max-width: 768px) {
    width: 400px;
    padding: 24px;
  }

  /* Телефон */
  @media (max-width: 480px) {
    width: 95%;
    padding: 20px;
    border-radius: 14px;
  }

  /* Очень маленькие экраны */
  @media (max-width: 360px) {
    width: 98%;
    padding: 16px;
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
  transition: 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.black};
  }

  @media (max-width: 480px) {
    top: 12px;
    right: 12px;
    font-size: 18px;
  }
`;