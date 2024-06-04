import { createStore,applyMiddleware,compose } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from "redux-thunk";
import rootReducer from '../Reducers/root_Reducer/rootReducer'
const persistConfig = {
  key: 'authType',
  storage: storage,
};
const pReducer = persistReducer(persistConfig, rootReducer);
const middleware = applyMiddleware(thunk);
const store = createStore(pReducer, middleware);
const persistor = persistStore(store)
export { persistor, store };
