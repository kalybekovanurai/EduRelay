import { Container, Spinner, Message } from "./LoadingPage.styles";

export const LoadingPage = () => {
  return (
    <Container>
      <Spinner />
      <Message>Грузиться...</Message>
    </Container>
  );
}

