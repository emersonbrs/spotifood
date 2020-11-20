import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  padding: 0 0 12px;
  background-color: #e9e9e9;
`;

export const SearchByName = styled.input`
  width: 80%;
  text-align: center;
  padding: 12px 0 12px;
  background: #fff;
  max-width: 500px;

  border: 1px solid #d2d2d2;
  border-radius: 5px;
  font-size: 18px;

  &:focus {
    box-shadow: 0 4px 40px rgba(0, 0, 0, 0.25);
  }
`;

export const TitleSearch = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  color: #000;
`;

export const Title = styled.h1`
  font-size: 20px;
  color: #000;
`;

export const TitleName = styled.h1`
  font-size: 25px;
  color: #cc0000;
  margin-left: 5px;
  margin-right: 5px;
`;
