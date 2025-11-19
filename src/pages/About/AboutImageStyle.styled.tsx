import styled from "styled-components";

export const AboutImageStyle = styled.img`
  width: 100%;
  height: auto;
  max-width: 520px;
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: ${({ theme }) => theme.shadow.card};
  object-fit: cover;
  display: block;
  margin: 0 auto 20px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;
