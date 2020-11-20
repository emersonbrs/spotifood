import React from 'react';
import { useAuth } from '../../hooks/auth';

import { Container, Title, BtnLogout } from './styles';

const Header: React.FC = () => {
  const { logoutSpotifood } = useAuth();
  return (
    <Container>
      <Title>SpotiFood</Title>
      <BtnLogout onClick={logoutSpotifood}>Sair</BtnLogout>
    </Container>
  );
};
export default Header;
