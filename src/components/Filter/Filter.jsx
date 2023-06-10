import { useDispatch, useSelector } from 'react-redux';

import { getFilterValue } from 'redux/actions';

import TextField from '@mui/material/TextField';
import css from './Filter.module.css';
import { getFilter } from 'redux/selectors';

export default function Filter() {
  const dispatch = useDispatch();
  const handleFilterChange = e => {
    // console.log(e.target.value);
    dispatch(getFilterValue(e.target.value));
  };
  const filter = useSelector(getFilter);
  // console.log(filter);

  return (
    <label className={css.filter}>
      Find contacts by name
      <TextField
        id="standard-basic"
        label="Print name ..."
        variant="standard"
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilterChange}
      />
    </label>
  );
}
