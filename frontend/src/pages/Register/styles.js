import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  padding: 96px;
  background: #f0f0f5;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Description = styled.section`
  width: 100%;
  max-width: 380px;

  h1 {
    margin: 64px 0 32px;
    font-size: 32px;
  }

  p {
    font-size: 18px;
    color: #737380;
    line-height: 32px;
  }
`;

export const Form = styled.form`
  width: 100%;
  max-width: 450px;

  input {
    margin-top: 8px;
  }

  span {
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
    font-size: 18px;
    color: #e02041;

    strong {
      margin-left: 5px;
    }
  }
`;

export const InputGroup = styled.div`
  display: flex;

  input + input {
    margin-left: 8px;
  }

  input.uf {
    width: 80px;
  }
`;
