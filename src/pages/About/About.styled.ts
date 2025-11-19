import styled from "styled-components";

export const AboutWrapper = styled.div`
  max-width: 900px;
  margin: 40px auto;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Description = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.gray};
`;

export const CardsWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

export const CardBox = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: 20px;
  width: 260px;
  box-shadow: ${({ theme }) => theme.shadow.card};

  h3 {
    margin-bottom: 10px;
    color: ${({ theme }) => theme.colors.black};
  }

  p {
    color: ${({ theme }) => theme.colors.gray};
    font-size: 15px;
    line-height: 1.5;
  }
`;
