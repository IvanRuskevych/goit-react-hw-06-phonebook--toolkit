import { combineReducers } from 'redux';
import { ACTION_TYPE } from './constants';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const contactsReducer = (state = initialContacts, action) => {
  switch (action.type) {
    case ACTION_TYPE.addContacts:
      return [...state, action.payload];

    case ACTION_TYPE.deleteContacts:
      return state.filter(contact => contact.id !== action.payload);

    default:
      return state;
  }
};

// const initialFilter = {
//   filter: '',
// };

export const filterReducer = (state = '', action) => {
  switch (action.type) {
    case ACTION_TYPE.getFilterValue:
      return action.payload;

    default:
      return state;
  }
};

// export const reducer = (state = {}, action) => {
//   return {
//     filter: filterReducer(state.filter, action),
//   };
// };

export const reducer = combineReducers({
  filter: filterReducer,
  contacts: contactsReducer,
});
