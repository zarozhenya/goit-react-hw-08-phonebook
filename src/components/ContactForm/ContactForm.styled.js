import styled from 'styled-components';
import { Form, ErrorMessage, Field } from 'formik';

export const StyledForm = styled(Form)`
  padding: 30px;
  background-color: #dbe2ef;
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const StyledField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  margin-bottom: 20px;
`;

export const StyledLabel = styled.label`
  color: #112d4e;
  font-weight: 500;
  font-size: 18px;
`;

export const StyledInput = styled(Field)`
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

export const StyledError = styled(ErrorMessage)`
  color: #e84545;
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
  background-color: #3f72af;
  color: #f9f7f7;
  font-size: 16px;
`;
