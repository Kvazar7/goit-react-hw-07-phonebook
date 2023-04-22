import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});