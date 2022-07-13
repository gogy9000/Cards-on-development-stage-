import {combineReducers, createStore, legacy_createStore } from "redux";
import { AppReducer } from "./AppReducer/AppReducer";

const RootReducer=combineReducers({AppReducer})

export let store=legacy_createStore(RootReducer)

