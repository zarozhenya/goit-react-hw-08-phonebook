import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { StyledLink, StyledNav } from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <StyledNav>
      <StyledLink to="/">Home</StyledLink>
      {isLoggedIn && <StyledLink to="contacts">Contacts</StyledLink>}
    </StyledNav>
  );
};
