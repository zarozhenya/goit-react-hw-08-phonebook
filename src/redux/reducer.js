import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsInitialState = [];
const filterInitialState = '';

const contactsReducer = (state = contactsInitialState, action) => {
  switch (action.type) {
    case 'contacts/addContact':
      return [...state, action.payload];
    case 'contacts/deleteContact':
      return state.filter(contact => contact.id !== action.payload);
    default:
      return state;
  }
};

const filterReducer = (state = filterInitialState, action) => {
  switch (action.type) {
    case 'filter/setFilter':
      return action.payload;
    default:
      return state;
  }
};

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export const persistedRootReducer = persistReducer(persistConfig, rootReducer);
