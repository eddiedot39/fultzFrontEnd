import { Auth_Error, Auth_Success, Error_Timeout, Log_Out, User_Error, User_Loaded, User_Update } from "../constants";

const initialState = {
    user: {},
    token: null,
    isAuthenticated: false,
    error: ''
}

export default (state = initialState, action) => {
    const {type, payload} = action

    switch (type) {
        case Auth_Success:
            return {...state, token: payload, isAuthenticated: true, error: ''}
        case Auth_Error:
            return {...state, error: payload, isAuthenticated: false}
        case User_Loaded:
        case User_Update:
            return {...state, user: payload}
        case User_Error:
        case Log_Out:
            return initialState
        case Error_Timeout:
            return {...state, error: ''}
        default:
            return state
    }
}