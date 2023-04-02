import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container, HeaderContainer, Link } from './Header.styles';

export const Header = () => {
  return (
    <Container>
      <HeaderContainer>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </HeaderContainer>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
