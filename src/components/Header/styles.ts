import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #e9e9e9;
`;

export const Title = styled.h1`
  font-size: 38px;
  color: #cc0000;
  margin: 20px 20px 20px 70px;
`;

export const BtnLogout = styled.button`
  color: #cc0000;
  background-color: #fff;

  border: 1px solid #d2d2d2;
  border-radius: 5px;
  font-size: 18px;
  width: 110px;
  height: 50px;

  margin: 20px 70px 20px 20px;

  &:hover {
    transition: 400ms ease all;
    background-color: #cc0000;
    color: #fff;
  }
`;
