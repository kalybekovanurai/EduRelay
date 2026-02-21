import React from "react";
import HomeImage from "../../assets/Images/HomePageImage.avif";
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

import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate(); 

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
            <PrimaryButton onClick={() => navigate("/students")}>
              Хочу учиться
            </PrimaryButton>
          </Actions>
        </HeroLeft>

        <HeroRight>
          <Illustration src={HomeImage} alt="student-illustration" />
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
