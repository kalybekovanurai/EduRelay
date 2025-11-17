import {
  FooterContainer,
  FooterTop,
  FooterBrand,
  FooterLinks,
  FooterColumn,
  FooterBottom,
  FooterLogo,
  FooterTitle,
  FooterText,
  FooterLink,
} from "./Footer.styled";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterTop>
        <FooterBrand>
          <FooterLogo>EduRelay</FooterLogo>
          <FooterText>
            Платформа обмена знаниями между студентами. Учись и учи других!
          </FooterText>
        </FooterBrand>

        <FooterLinks>
          <FooterColumn>
            <FooterTitle>Навигация</FooterTitle>
            <FooterLink href="/">Home</FooterLink>
            <FooterLink href="/students">Students</FooterLink>
            {/* <FooterLink href="/matches">Matches</FooterLink> */}
          </FooterColumn>

          <FooterColumn>
            <FooterTitle>Проект</FooterTitle>
            <FooterLink href="#">О нас</FooterLink>
            <FooterLink href="#">Документы</FooterLink>
            <FooterLink href="#">FAQ</FooterLink>
          </FooterColumn>

          <FooterColumn>
            <FooterTitle>Контакты</FooterTitle>
            <FooterText>Кыргызский национальный университет</FooterText>
            <FooterText>Email: support@edurelay.com</FooterText>
          </FooterColumn>
        </FooterLinks>
      </FooterTop>

      <FooterBottom>
        © {new Date().getFullYear()} EduRelay. Все права защищены.
      </FooterBottom>
    </FooterContainer>
  );
}
