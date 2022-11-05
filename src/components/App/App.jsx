import { Wrapper, Title, Container, Heading } from './App.styled';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';

export const App = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Phonebook</Title>
        <ContactForm />

        <Heading>Contacts</Heading>
        <Filter />
        <ContactList />
      </Container>
    </Wrapper>
  );
};
