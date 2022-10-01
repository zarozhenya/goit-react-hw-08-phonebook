import { StyledField } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <StyledField>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        type="text"
        id="filter"
        name="filter"
        value={value}
        onChange={onChange}
      />
    </StyledField>
  );
};
