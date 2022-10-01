import styled from 'styled-components';
import { Form, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  width: 500px;
  padding: 10px;
  border: 1px solid black;
`;

export const StyledField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 200px;
  margin-bottom: 16px;
`;

export const StyledError = styled(ErrorMessage)`
  color: red;
  margin: 0;
`;

export const Button = styled.button`
  border: none;
  padding: 8px;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
  }
`;
