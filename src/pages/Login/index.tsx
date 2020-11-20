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
  // const txt = [
  //   { local: 'árabe', food: 'esfirra' },
  //   { local: 'japonesa', food: 'sushi' },
  //   { local: 'brasileira', food: 'açai' },
  // ];

  // const txt2 = ['árabe', 'esfirra'];

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('This will run every second!');
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
