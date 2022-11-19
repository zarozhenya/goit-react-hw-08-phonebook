import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  column-gap: 16px;
  align-items: center;
`;

export const StyledText = styled.p`
  color: #f9f7f7;
  font-weight: 500;
  margin: 0;
`;

export const Button = styled.button`
  display: block;
  border: none;
  margin: 0 auto;
  padding: 10px;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
  }
  background-color: #dbe2ef;
  color: #3f72af;
  font-size: 16px;
`;
