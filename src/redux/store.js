import { applyMiddleware, legacy_createStore } from "redux";
import { reducer } from "./reducer";
import thunk from "thunk";

const store = legacy_createStore(reducer,applyMiddleware(thunk));