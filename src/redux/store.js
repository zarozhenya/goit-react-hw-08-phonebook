import { devToolsEnhancer } from '@redux-devtools/extension';
import { createStore } from 'redux';
import { persistStore } from 'redux-persist';
import { persistedRootReducer } from './reducer';

const enhancer = devToolsEnhancer();

export const store = createStore(persistedRootReducer, enhancer);

export const persistor = persistStore(store);
