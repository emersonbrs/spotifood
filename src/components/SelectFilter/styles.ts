import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 10px 16px 16px 16px;
  width: 100%;
  color: #f4ede8;
  align-items: center;
  justify-content: center;

  select {
    border: 2px solid green;
    padding: 10px;
    outline: none;
    color: #d2d2d2;
    font-size: 20px;
    width: 100%;
    border-radius: 5px;
    &::placeholder {
      color: inherit;
    }
  }
`;
