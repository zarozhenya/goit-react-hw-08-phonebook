import { AiFillDelete } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/actions';

import { List, Button, Item } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  if (filteredContacts.length === 0) return;
  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => (
        <Item key={id}>
          {name}: {number}
          <Button onClick={() => dispatch(deleteContact(id))}>
            <AiFillDelete size="20" fill="currentColor" />
          </Button>
        </Item>
      ))}
    </List>
  );
};
