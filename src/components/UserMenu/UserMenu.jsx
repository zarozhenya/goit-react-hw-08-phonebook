import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import { Button, StyledText, StyledWrapper } from './UserMenu.styled';

export const UserMenu = () => {
  const { name } = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <StyledWrapper>
      <StyledText>Hello, {name}!</StyledText>
      <Button onClick={() => dispatch(logOut())}>Log Out</Button>
    </StyledWrapper>
  );
};
