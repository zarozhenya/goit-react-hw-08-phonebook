import styled from 'styled-components';

export const StyledField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 16px;
  padding: 15px 30px;
  background-color: #dbe2ef;
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const StyledLabel = styled.label`
  color: #112d4e;
  font-weight: 500;
  font-size: 18px;
`;

export const StyledInput = styled.input`
  padding: 10px;
  border: none;
  border-radius: 10px;
  &:focus {
    outline: none;
  }
  background-color: #f9f7f7;
  color: #112d4e;
  font-size: 16px;
`;
