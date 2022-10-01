import styled from 'styled-components';

export const List = styled.ul`
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Button = styled.button`
  border: none;
  padding: 5px;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
  }
  margin-left: 20px;
`;
