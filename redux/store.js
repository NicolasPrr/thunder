import { AsyncStorage } from "react-native";
import { applyMiddleware, createStore, compse } from "redux";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import {persistStore, persistReducer} from 'redux-persist'
import allReducers from "./reducers/index";

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const middlewares = [];


if (__DEV__) {
  middlewares.push(createLogger());
}
const persistedReducer = persistReducer(persistConfig, allReducers)
export const store = createStore(
  persistedReducer,
  undefined,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export const  persistor = persistStore(store)