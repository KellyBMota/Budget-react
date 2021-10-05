import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import entriesReducers from "../reducers/entries.reducers";
import modalsReducer from "../reducers/modal.reducers";

const configureStore = () => { 
    const store = createStore(
      combineReducers({
        entries: entriesReducers,
        modals: modalsReducer
      }), composeWithDevTools()
    )
  return store;
};

export default configureStore;