import React, { useEffect } from 'react';

import logoSpotify from '../../assets/logoSpotify.png';
import logoIfood from '../../assets/logoIfood.png';
import { useAuth } from '../../hooks/auth';

import {
  Container,
  ContainerInside,
  Title,
  DescriptionTitle,
  TitleSpotify,
  BtnLogin,
  Logo,
  LogoSpotify,
  Spotify,
} from './styles';

const Login: React.FC = () => {
  const { loginSpotifood } = useAuth();

  return (
    <Container>
      <Spotify>
        <LogoSpotify src={logoSpotify} />
        <TitleSpotify>por Spotify</TitleSpotify>
      </Spotify>
      <ContainerInside>
        <Logo src={logoIfood} />
        <Title>Ouça música árabe enquanto pede esfirra</Title>
        <DescriptionTitle>
          Curta um som enquanto seu pedido está a caminho...
        </DescriptionTitle>
        <BtnLogin onClick={loginSpotifood}>Ouça agora</BtnLogin>
      </ContainerInside>
    </Container>
  );
};

export default Login;
