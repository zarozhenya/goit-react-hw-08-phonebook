import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #112d4e;
  min-height: 100vh;
  padding: 40px 20px;
  @media screen and (min-width: 480px) {
    padding: 40px 0;
  }
`;

export const Title = styled.h1`
  color: #f9f7f7;
  margin-top: 0;
  margin-bottom: 20px;
`;

export const Heading = styled.h2`
  color: #f9f7f7;
  font-size: 32px;
  margin-top: 0;
  margin-bottom: 20px;
`;

export const Container = styled.div`
  /* width: 1000px; */
  margin: 0 auto;
  @media screen and (min-width: 480px) {
    width: 440px;
  }
  @media screen and (min-width: 768px) {
    width: 700px;
  }
`;
