import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import { AppReducer } from "./AppReducer/AppReducer";
import thunk from "redux-thunk";

const RootReducer=combineReducers({AppReducer})

export let store=legacy_createStore(RootReducer,applyMiddleware(thunk))

