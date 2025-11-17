import React from "react";


import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import LoopIcon from "@mui/icons-material/Loop";
import PeopleIcon from "@mui/icons-material/People";
import {
  PageWrapper,
  Hero,
  HeroLeft,
  Title,
  Subtitle,
  Actions,
  HeroRight,
  Illustration,
  Features,
  FeatureCard,
  FeatureIcon,
  FeatureTitle,
  FeatureText,
} from "./Home.styled";
import { PrimaryButton } from "../../UI/Buttons/PrimaryButton";
import { SecondaryButton } from "../../UI/Buttons/SecondaryButton";

const Home: React.FC = () => {
  return (
    <PageWrapper>
      <Hero>
        <HeroLeft>
          <Title>Учись и учи — обмен знаниями внутри университета</Title>
          <Subtitle>
            EduRelay объединяет студентов: укажи, чему можешь научить и чему
            хочешь научиться — мы найдём подходящих партнёров для обмена опытом.
          </Subtitle>

          <Actions>
            <PrimaryButton>Хочу учиться</PrimaryButton>
            <SecondaryButton>Хочу делиться</SecondaryButton>
          </Actions>

        </HeroLeft>

        <HeroRight>
          <Illustration
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=1f9f5c0a0f2a9f2d6b4a5c3fb1c0f2e2"
            alt="student-illustration"
          />
        </HeroRight>
      </Hero>

      <Features>
        <FeatureCard>
          <FeatureIcon>
            <LoopIcon fontSize="large" />
          </FeatureIcon>
          <FeatureTitle>Обмен навыками</FeatureTitle>
          <FeatureText>
            Учите друг друга: от прогресса в коде до разговорного языка.
          </FeatureText>
        </FeatureCard>

        <FeatureCard>
          <FeatureIcon>
            <AutoAwesomeIcon fontSize="large" />
          </FeatureIcon>
          <FeatureTitle>Гибкие форматы</FeatureTitle>
          <FeatureText>
            Онлайн встречи, короткие уроки, совместные проекты и коллаборации.
          </FeatureText>
        </FeatureCard>

        <FeatureCard>
          <FeatureIcon>
            <PeopleIcon fontSize="large" />
          </FeatureIcon>
          <FeatureTitle>Студенческое сообщество</FeatureTitle>
          <FeatureText>
            Создавайте группы, находите единомышленников и проводите
            мастер-классы.
          </FeatureText>
        </FeatureCard>
      </Features>
    </PageWrapper>
  );
};

export default Home;
