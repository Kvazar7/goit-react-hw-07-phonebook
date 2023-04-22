import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { addFilter } from 'redux/filterSlice';
import css from '../Filter/filter.module.css'

const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const onChange = e => {
    dispatch(addFilter(e.currentTarget.value.trim()))
  }
  
  return (
    <label htmlFor="" className={css.filter_label}>
      Find contacts by Name:
      <input type="text" value={filter} onChange={onChange} className={css.filter_label__input} />
    </label>
  );
}

export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};