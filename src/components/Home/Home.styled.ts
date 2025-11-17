import styled from "styled-components";

export const PageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #f7fafc;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 60px;
  box-sizing: border-box;
  font-family: ${({ theme }) => theme.fonts.family};
`;

export const Hero = styled.section`
  width: 100%;
  max-width: 1200px;
  margin-top: 32px;
  display: grid;
  grid-template-columns: 1fr 460px;
  gap: 32px;
  align-items: center;
  padding: 36px;
  box-sizing: border-box;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    padding: 20px;
  }
`;

export const HeroLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-right: 8px;

  @media (max-width: 960px) {
    text-align: center;
    align-items: center;
    padding-right: 0;
  }
`;

export const Title = styled.h1`
  font-size: 40px;
  line-height: 1.05;
  margin: 0;
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};

  @media (max-width: 960px) {
    font-size: 28px;
  }
`;

export const Subtitle = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.gray};
  font-size: 16px;
  max-width: 680px;
`;

export const Actions = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 8px;

  @media (max-width: 960px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
`;

export const HeroRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Illustration = styled.img`
  width: 100%;
  max-width: 420px;
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: ${({ theme }) => theme.shadow.card};
  object-fit: cover;
`;

export const Features = styled.section`
  width: 100%;
  max-width: 1200px;
  margin-top: 36px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 0 24px;
  box-sizing: border-box;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

export const FeatureCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: 20px;
  box-shadow: ${({ theme }) => theme.shadow.card};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  text-align: center;
`;

export const FeatureIcon = styled.div`
  color: #4f46e5;
  background: rgba(79, 70, 229, 0.08);
  width: 64px;
  height: 64px;
  border-radius: ${({ theme }) => theme.radius.md};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FeatureTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  color: ${({ theme }) => theme.colors.black};
`;

export const FeatureText = styled.p`
  margin: 0;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray};
`;
