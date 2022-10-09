import { nanoid } from 'nanoid';
import { Component } from 'react';
import { Notify } from 'notiflix';

import { Wrapper, Title, Container, Heading } from './App.styled';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';
import { read, create } from 'utils/crud';

const KEY = 'contacts';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = read(KEY);
    this.setState({ contacts: savedContacts });
  }

  componentDidUpdate() {
    create(KEY, this.state.contacts);
  }

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredContacts;
  };

  addContact = data => {
    const { contacts } = this.state;
    const isContactInContacts = contacts.some(({ name }) => name === data.name);
    if (isContactInContacts) {
      Notify.failure(`Contact "${data.name}" is already in your Contacts`);
      return;
    }
    const contact = { ...data, id: nanoid() };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };
  deleteContact = idToDelete => {
    const { contacts } = this.state;
    const updatedContacts = contacts.filter(({ id }) => id !== idToDelete);
    this.setState({ contacts: updatedContacts });
  };

  updateFilter = e => {
    const { value } = e.currentTarget;
    this.setState({ filter: value });
  };

  render() {
    const { filter, contacts } = this.state;
    const filteredContacts = this.getFilteredContacts();
    return (
      <Wrapper>
        <Container>
          <Title>Phonebook</Title>
          <ContactForm addContact={this.addContact} />

          <Heading>Contacts</Heading>
          <Filter value={filter} onChange={this.updateFilter} />
          {contacts.length > 0 && (
            <ContactList
              contacts={filteredContacts}
              handleDelete={this.deleteContact}
            />
          )}
        </Container>
      </Wrapper>
    );
  }
}
