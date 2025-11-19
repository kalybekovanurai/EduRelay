import { AboutWrapper, CardsWrapper, Description, Title } from "./About.styled";
import AboutCard from "./AboutCard";
import AboutImage from "../../assets/Images/AboutImage.jpg";
import { AboutImageStyle } from "./AboutImageStyle.styled";

export default function About() {
  return (
    <AboutWrapper>
      <Title>About EduRelay</Title>
      <AboutImageStyle src={AboutImage} alt="about-image" />
      <Description>
        EduRelay — платформа для обмена знаниями между студентами. Здесь каждый
        может учить и быть услышанным. Мы создаём удобное пространство, где
        знания становятся доступнее.
      </Description>

      <CardsWrapper>
        <AboutCard
          title="Миссия"
          text="Дать каждому студенту возможность делиться навыками и получать опыт от других."
        />
        <AboutCard
          title="Ценности"
          text="Открытость, развитие, взаимопомощь и честность в обучении."
        />
        <AboutCard
          title="Будущее"
          text="Мы планируем расширять функционал, добавлять чаты, алгоритм совпадения и оставлят отзывы."
        />
      </CardsWrapper>
    </AboutWrapper>
  );
}
