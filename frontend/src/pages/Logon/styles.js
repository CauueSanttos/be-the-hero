import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FormArea = styled.section`
  width: 100%;
  max-width: 350px;
  margin: 30px;
`;

export const Form = styled.form`
  margin-top: 100px;

  h1 {
    font-size: 32px;
    margin-bottom: 32px;
  }
`;
