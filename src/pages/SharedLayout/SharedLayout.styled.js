import styled from 'styled-components';
export const Wrapper = styled.div`
  background-color: #112d4e;
  min-height: 100vh;
  padding: 0px 20px 40px 20px;
  @media screen and (min-width: 480px) {
    padding-bottom: 40px;
  }
`;
export const Container = styled.div`
  margin: 0 auto;
  @media screen and (min-width: 480px) {
    width: 440px;
  }
  @media screen and (min-width: 768px) {
    width: 700px;
  }
`;
