import { List, Button } from './ContactList.styled';

export const ContactList = ({ contacts, handleDelete }) => {
  return (
    <List>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <Button onClick={() => handleDelete(contact.id)}>Delete</Button>
        </li>
      ))}
    </List>
  );
};
