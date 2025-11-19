// src/components/Footer/Footer.styled.ts
import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  background: #f7f9fc;
  padding: 60px 0 30px;
  margin-top: 80px;
  border-top: 1px solid #e5e8ef;
`;

export const FooterTop = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  display: flex;
  justify-content: space-between;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FooterBrand = styled.div`
  max-width: 320px;
`;

export const FooterLogo = styled.h2`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 10px;
  color: #111827;
`;

export const FooterText = styled.p`
  font-size: 15px;
  color: #6b7280;
  margin-bottom: 6px;
`;

export const FooterLinks = styled.div`
  display: flex;
  gap: 60px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FooterColumn = styled.div`
  min-width: 140px;
`;

export const FooterTitle = styled.h4`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 14px;
  color: #111827;
`;

/* 🔵 SPA-Навигация */
export const FooterLink = styled(Link)`
  display: block;
  font-size: 15px;
  color: #4b5563;
  margin-bottom: 8px;
  text-decoration: none;
  transition: 0.2s;

  &:hover {
    color: #2563eb;
  }
`;

/* 🔗 Внешние ссылки */
export const FooterExternalLink = styled.a`
  display: block;
  font-size: 15px;
  color: #4b5563;
  margin-bottom: 8px;
  text-decoration: none;
  transition: 0.2s;

  &:hover {
    color: #2563eb;
  }
`;

export const FooterBottom = styled.div`
  text-align: center;
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid #e5e7eb;
  color: #6b7280;
  font-size: 14px;
`;
