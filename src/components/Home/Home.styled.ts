import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

export const PageWrapper = styled("div")({
  width: "100%",
  minHeight: "100vh",
  background: "#f7fafc",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingBottom: "60px",
  boxSizing: "border-box",
  fontFamily:
    "'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
});

export const Hero = styled("section")(({ theme }) => ({
  width: "100%",
  maxWidth: "1200px",
  marginTop: "32px",
  display: "grid",
  gridTemplateColumns: "1fr 460px",
  gap: "32px",
  alignItems: "center",
  padding: "36px",
  boxSizing: "border-box",

  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
    padding: "20px",
  },
}));

export const HeroLeft = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  paddingRight: "8px",

  [theme.breakpoints.down("md")]: {
    textAlign: "center",
    alignItems: "center",
    paddingRight: 0,
  },
}));

export const Title = styled("h1")(({ theme }) => ({
  fontSize: "40px",
  lineHeight: 1.05,
  margin: 0,
  color: "#0f172a",
  fontWeight: 800,

  [theme.breakpoints.down("md")]: {
    fontSize: "28px",
  },
}));

export const Subtitle = styled("p")(({ theme }) => ({
  margin: 0,
  color: "#374151",
  fontSize: "16px",
  maxWidth: "680px",
}));

export const Actions = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "12px",
  marginTop: "8px",

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
  },
}));



export const HeroRight = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const Illustration = styled("img")(({ theme }) => ({
  width: "100%",
  maxWidth: "420px",
  borderRadius: "16px",
  boxShadow: "0 20px 40px rgba(2,6,23,0.08)",
  objectFit: "cover",
}));

export const Features = styled("section")(({ theme }) => ({
  width: "100%",
  maxWidth: "1200px",
  marginTop: "36px",
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "20px",
  padding: "0 24px",
  boxSizing: "border-box",

  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
  },
}));

export const FeatureCard = styled("div")(({ theme }) => ({
  background: "#fff",
  borderRadius: "14px",
  padding: "20px",
  boxShadow: "0 8px 24px rgba(2,6,23,0.06)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "12px",
  textAlign: "center",
}));

export const FeatureIcon = styled("div")(({ theme }) => ({
  color: "#4f46e5",
  background: "rgba(79,70,229,0.08)",
  width: "64px",
  height: "64px",
  borderRadius: "12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const FeatureTitle = styled("h3")(({ theme }) => ({
  margin: 0,
  fontSize: "18px",
  fontWeight: 700,
  color: "#0f172a",
}));

export const FeatureText = styled("p")(({ theme }) => ({
  margin: 0,
  fontSize: "14px",
  color: "#6b7280",
}));
