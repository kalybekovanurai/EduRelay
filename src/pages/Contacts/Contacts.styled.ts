import styled from "styled-components";

export const ContactsWrapper = styled.div`
  max-width: 900px;
  margin: 40px auto;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const TeamWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

export const PersonCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  padding: 20px;
  width: 260px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

  h3 {
    margin-bottom: 10px;
    color: ${({ theme }) => theme.colors.black};
    font-size: 20px;
  }

  p {
    color: ${({ theme }) => theme.colors.gray};
    font-size: 15px;
    line-height: 1.5;
  }
`;
