import PropTypes from 'prop-types';
import { AiFillDelete } from 'react-icons/ai';

import { List, Button, Item } from './ContactList.styled';

export const ContactList = ({ contacts, handleDelete }) => {
  return (
    <List>
      {contacts.map(contact => (
        <Item key={contact.id}>
          {contact.name}: {contact.number}
          <Button onClick={() => handleDelete(contact.id)}>
            <AiFillDelete size="20" fill="currentColor" />
          </Button>
        </Item>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  handleDelete: PropTypes.func.isRequired,
};
