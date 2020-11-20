import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 10px 16px 16px 16px;
  width: 100%;
  color: #f4ede8;
  align-items: center;
  justify-content: center;

  input {
    width: 80%;
    text-align: center;
    padding: 12px 0 12px;
    background: #fff;
    max-width: 500px;

    border: 1px solid #d2d2d2;
    border-radius: 50px;
    font-size: 18px;

    &:focus {
      box-shadow: 0 4px 40px rgba(0, 0, 0, 0.25);
    }
  }
`;

// export const Error = styled(Tooltip)`
//   height: 20px;
//   svg {
//     margin: 0px;
//   }
//   span {
//     background: #c53030;
//     color: #fff;
//     &::before {
//       border-color: #c53030 transparent;
//     }
//   }
// `;
