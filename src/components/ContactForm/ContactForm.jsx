import PropTypes from 'prop-types';
import { Formik, Field } from 'formik';
import * as yup from 'yup';

import {
  StyledForm,
  StyledField,
  StyledError,
  Button,
} from './ContactForm.styled';
export const ContactForm = ({ addContact }) => {
  const initialValues = {
    name: '',
    number: '',
  };
  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .matches(
        /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        'Please enter a name'
      )
      .required('Please enter a name'),
    number: yup
      .string()
      .matches(
        /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
        'Please enter a number'
      )
      .required('Please enter a number'),
  });
  const handleSubmit = (values, actions) => {
    actions.resetForm();
    addContact({ name: values.name, number: values.number });
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <StyledForm autoComplete="off">
        <StyledField>
          <label htmlFor="nameInput">Name</label>
          <Field id="nameInput" type="text" name="name" />
          <StyledError name="name" component="p" />
        </StyledField>
        <StyledField>
          <label htmlFor="telInput">Number</label>
          <Field type="tel" name="number" />
          <StyledError name="number" component="p" />
        </StyledField>

        <Button type="submit">Add contact</Button>
      </StyledForm>
    </Formik>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
