import styled from 'styled-components';

export const Form = styled.form`
  width: 100vw;
  height: 100vh;
  background: #609;

  display: flex;
  align-items: center;
  justify-content: center;

  .wrapper {
    width: 100%;
    padding: 0 16px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    > div {
      width: 100%;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 45px;
  border-radius: 5px;
  border: none;
  margin-bottom: 10px;
  font-size: 16px;
  padding: 0 10px;
  box-sizing: border-box;
`;

export const SubmitButton = styled.button`
  width: 100%;
  height: 45px;
  border-radius: 5px;
  border: none;
  background: #fff;
  font-weight: bold;
  text-transform: uppercase;
  color: #609;
`;
