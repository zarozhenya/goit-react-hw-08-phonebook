import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
import { Notify } from 'notiflix';

import { Wrapper, Title, Container, Heading } from './App.styled';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';
import { read, create } from 'utils/crud';

const KEY = 'contacts';

export const App = () => {
  const [contacts, setContacts] = useState(() => read(KEY));
  const [filter, setFilter] = useState('');

  useEffect(() => {
    create(KEY, contacts);
  }, [contacts]);

  const addContact = data => {
    const isContactInContacts = contacts.some(({ name }) => name === data.name);
    if (isContactInContacts) {
      Notify.failure(`Contact "${data.name}" is already in your Contacts`);
      return;
    }

    const contact = { ...data, id: nanoid() };
    setContacts(prev => [contact, ...prev]);
  };

  const deleteContact = idToDelete => {
    const updatedContacts = contacts.filter(({ id }) => id !== idToDelete);
    setContacts(updatedContacts);
  };

  const updateFilter = e => {
    const { value } = e.currentTarget;
    setFilter(value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Wrapper>
      <Container>
        <Title>Phonebook</Title>
        <ContactForm addContact={addContact} />

        <Heading>Contacts</Heading>
        <Filter value={filter} onChange={updateFilter} />
        {contacts.length > 0 && (
          <ContactList
            contacts={filteredContacts}
            handleDelete={deleteContact}
          />
        )}
      </Container>
    </Wrapper>
  );
};
