import { AppBar } from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { Container, Wrapper } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Wrapper>
      <Container>
        <AppBar />
        <main>
          <Outlet />
        </main>
      </Container>
    </Wrapper>
  );
};
