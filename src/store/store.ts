import { dataReducer } from "../reducer";
import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

const store = createStore(dataReducer, applyMiddleware(thunk));

export type AppDispatch = typeof store.dispatch;
export default store;
