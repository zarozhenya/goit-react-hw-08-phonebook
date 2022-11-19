import { AiFillDelete } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectIsLoading,
  selectError,
  selectFilteredContacts,
} from 'redux/contacts/selectors';

import { deleteContact } from 'redux/contacts/operations';

import { List, Button, Item, Container, Message } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filteredContacts = useSelector(selectFilteredContacts);
  return (
    <Container>
      {isLoading && <Message>Loading...</Message>}
      {error && <Message color="red">{error}</Message>}
      {filteredContacts.length === 0 && !error && !isLoading && (
        <Message>No items yet.</Message>
      )}
      {filteredContacts.length > 0 && (
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
      )}
    </Container>
  );
};
