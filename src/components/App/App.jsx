import { Wrapper, Title, Container, Heading } from './App.styled';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
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
