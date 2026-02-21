import React from "react";
import { CardBox } from "./About.styled"

interface AboutCardProps {
  title: string;
  text: string;
}

const AboutCard: React.FC<AboutCardProps> = ({ title, text }) => {
  return (
    <CardBox>
      <h3>{title}</h3>
      <p>{text}</p>
    </CardBox>
  );
};

export default AboutCard;
