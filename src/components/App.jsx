import { nanoid } from 'nanoid';
import { Component } from 'react';
import { Notify } from 'notiflix';

import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
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
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.updateFilter} />
        <ContactList
          contacts={filteredContacts}
          handleDelete={this.deleteContact}
        />
      </>
    );
  }
}
