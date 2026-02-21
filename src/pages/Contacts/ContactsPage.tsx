import {
  ContactsWrapper,
  Title,
  TeamWrapper,
  PersonCard,
} from "./Contacts.styled";

export const ContactsPage = () => {
  return (
    <ContactsWrapper>
      <Title>Наша команда</Title>

      <p>
        Над проектом EduRelay работают 3 человека — мы стремимся развивать
        платформу для обмена знаниями.
      </p>

      <TeamWrapper>
        <PersonCard>
          <h3>Нурай Калыбекова</h3>
          <p>
            Frontend Developer — отвечает за интерфейс, навигацию, дизайн
            компонентов.
          </p>
        </PersonCard>

        <PersonCard>
          <h3>Мурзабекова Аруукезирек</h3>
          <p>
            Backend Developer — разрабатывает серверную часть, API и базу
            данных.
          </p>
        </PersonCard>

        <PersonCard>
          <h3>Эстебесова Назим</h3>
          <p>UI/UX Designer — дизайн страниц, визуальный стиль.</p>
        </PersonCard>
      </TeamWrapper>
    </ContactsWrapper>
  );
};
