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
  FooterExternalLink,
} from "./Footer.styled";

export const Footer = () => {
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

            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="/students">Students</FooterLink>
            <FooterLink to="/about">About</FooterLink>
            <FooterLink to="/contacts">Contacts</FooterLink>
          </FooterColumn>

          <FooterColumn>
            <FooterTitle>Проект</FooterTitle>
            <FooterExternalLink href="#">О нас</FooterExternalLink>
            <FooterExternalLink href="#">Документы</FooterExternalLink>
            <FooterExternalLink href="#">FAQ</FooterExternalLink>
          </FooterColumn>

          <FooterColumn>
            <FooterTitle>Контакты</FooterTitle>
            <FooterText>+996555875625</FooterText>
            <FooterText>Email: nnur28515@gmail.com</FooterText>
          </FooterColumn>
        </FooterLinks>
      </FooterTop>

      <FooterBottom>© {new Date().getFullYear()} EduRelay</FooterBottom>
    </FooterContainer>
  );
};
