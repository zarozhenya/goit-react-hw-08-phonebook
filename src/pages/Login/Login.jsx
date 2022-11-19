import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import * as yup from 'yup';
import {
  StyledError,
  StyledField,
  StyledForm,
  StyledInput,
  StyledLabel,
  Button,
  Title,
} from './Login.styled';

export const Login = () => {
  const dispatch = useDispatch();
  const initialValues = {
    email: '',
    password: '',
  };
  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));
    resetForm();
  };
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Please enter an email')
      .required('Please enter an email'),
    password: yup
      .string()
      .min(8, 'Please enter the password')
      .required('Please enter the password'),
  });
  return (
    <>
      <Title>Log In</Title>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <StyledForm>
          <StyledField>
            <StyledLabel htmlFor="email">Email</StyledLabel>
            <StyledInput id="email" type="email" name="email" />
            <StyledError name="email" component="p" />
          </StyledField>
          <StyledField>
            <StyledLabel htmlFor="password">Password</StyledLabel>
            <StyledInput id="password" type="password" name="password" />
            <StyledError name="password" component="p" />
          </StyledField>
          <Button type="submit">Login</Button>
        </StyledForm>
      </Formik>
    </>
  );
};
