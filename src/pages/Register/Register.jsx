import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import * as yup from 'yup';
import {
  StyledError,
  StyledField,
  StyledForm,
  StyledInput,
  StyledLabel,
  Button,
  Title,
} from './Register.styled';
export const Register = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };
  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };
  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .matches(
        /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        'Please enter a name'
      )
      .required('Please enter a name'),
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
      <Title>Register</Title>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <StyledForm>
          <StyledField>
            <StyledLabel htmlFor="name">Name</StyledLabel>
            <StyledInput id="name" type="text" name="name" />
            <StyledError name="name" component="p" />
          </StyledField>
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
          <Button type="submit">Register</Button>
        </StyledForm>
      </Formik>
    </>
  );
};
