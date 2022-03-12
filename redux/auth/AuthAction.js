import AsyncStorage from "@react-native-async-storage/async-storage"
import API from "../../plugins/API"
import { Auth_Error, Auth_Success, Hide_Loader, Log_Out, Show_Loader, User_Error, User_Loaded } from "../constants"
import setAuthToken from "../../helper/setAuthToken"


export const logInRequest = (nav, payload) => async dispatch => {
    try {
        dispatch({type: Show_Loader})
        const res = await API.post('/auth/login', payload)
        const {token} = res.data
        await AsyncStorage.setItem('token', token)
        dispatch({type: Auth_Success, payload: token})
        nav.navigate('Feed')
    } catch (error) {
        dispatch({type: Auth_Error, payload: error.response.data.message})
    }
    dispatch({type: Hide_Loader})
}

export const loadUserRequest = () => async dispatch => {
    try {
        dispatch({type: Show_Loader})
        const token = await AsyncStorage.getItem('token')
        if(token) {
            setAuthToken(token)
            dispatch({type: Auth_Success, payload: token})
            const res = await API.get('/user')
            dispatch({type: User_Loaded, payload: res.data})
        }
    } catch (error) {
        dispatch({type: User_Error})
    }
    dispatch({type: Hide_Loader})
}

export const logOutRequest = nav => async dispatch => {
    await AsyncStorage.removeItem('token')
    dispatch({type: Log_Out})
    nav.navigate('Feed')
}