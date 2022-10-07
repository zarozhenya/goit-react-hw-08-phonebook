import styled from 'styled-components';

export const List = styled.ul`
  margin: 0;
  margin-top: 20px;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 15px;

  padding: 30px;
  background-color: #dbe2ef;
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #3f72af;
  border-radius: 10px;
  font-weight: 500;
  font-size: 18px;
  color: #f9f7f7;
`;

export const Button = styled.button`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
  }
  color: #f9f7f7;
  background-color: #e84545;
`;
