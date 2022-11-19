import { StyledLink, StyledNav } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <StyledNav>
      <StyledLink to="/register">Register</StyledLink>
      <StyledLink to="/login">Login</StyledLink>
    </StyledNav>
  );
};
