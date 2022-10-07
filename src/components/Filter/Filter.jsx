import PropTypes from 'prop-types';

import { StyledField, StyledLabel, StyledInput } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <StyledField>
      <StyledLabel htmlFor="filter">Find contacts by name</StyledLabel>
      <StyledInput
        type="text"
        id="filter"
        name="filter"
        value={value}
        onChange={onChange}
      />
    </StyledField>
  );
};
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
