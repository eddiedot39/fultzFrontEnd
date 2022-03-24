import API from "../../plugins/API"
import { Get_Posts, Get_User_Posts, Post_Error } from "../constants"


export const getAllPostsRequest = () => async dispatch => {
    try {
        const res = await API.get('/post')
        dispatch({type: Get_Posts, payload: res.data})    
    } catch (error) {
        dispatch({type: Post_Error, payload: error.response.data.message})
    }
}

export const getUserPosts = () => async dispatch => {
    try {
        const res = await API.get('/post/user')
        dispatch({type: Get_User_Posts, payload: res.data})
    } catch (error) {
        console.log(error.response)
        dispatch({type: Post_Error, payload: error.response.data.message})
    }
}