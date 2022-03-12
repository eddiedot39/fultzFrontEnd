import { combineReducers } from "redux";
import AuthReducer from './auth/AuthReducer'
import LoaderReducer from "./loader/LoaderReducer";
import PostReducer from "./post/PostReducer";

export default combineReducers({AuthReducer, LoaderReducer, PostReducer})