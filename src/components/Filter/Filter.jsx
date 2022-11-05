import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/actions';

import { StyledField, StyledLabel, StyledInput } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  return (
    <StyledField>
      <StyledLabel htmlFor="filter">Find contacts by name</StyledLabel>
      <StyledInput
        type="text"
        id="filter"
        name="filter"
        value={filter}
        onChange={e => dispatch(setFilter(e.currentTarget.value))}
      />
    </StyledField>
  );
};
