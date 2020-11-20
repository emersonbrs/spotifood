import styled from 'styled-components';

import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  background-color: #cc0000;
`;

export const ContainerInside = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Spotify = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  align-items: center;
`;

export const Logo = styled.img`
  width: 10%;
  margin-bottom: 50px;
`;

export const LogoSpotify = styled.img`
  width: 30px;
  height: 28px;
  margin-right: 10px;
  margin-left: 40px;
`;

export const Title = styled.h1`
  font-size: 38px;
  color: #fff;
  user-select: none;
`;

export const DescriptionTitle = styled.h1`
  padding-top: 2%;
  padding-bottom: 2%;
  font-size: 23px;
  color: #fff;
  user-select: none;
`;

export const TitleSpotify = styled.h3`
  font-size: 15px;
  color: #fff;
  user-select: none;
`;

export const BtnLogin = styled.button`
  background: #fff;
  color: #cc0000;
  font-size: 22px;
  font-weight: bold;
  width: 190px;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  margin-top: 16px;
  transition: background-color 0.2s;
  &:hover {
    color: #fff;
    background-color: ${shade(0.5, '#cc0000')};
  }
`;
