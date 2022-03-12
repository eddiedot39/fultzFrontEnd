import { combineReducers } from "redux";
import AuthReducer from './auth/AuthReducer'
import LoaderReducer from "./loader/LoaderReducer";

export default combineReducers({AuthReducer, LoaderReducer})