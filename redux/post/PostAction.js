import API from "../../plugins/API"
import { Get_Posts, Hide_Loader, Post_Error, Show_Loader } from "../constants"


export const getAllPostsRequest = () => async dispatch => {
    try {
        dispatch({type: Show_Loader})
        const res = await API.get('/post')
        dispatch({type: Get_Posts, payload: res.data})    
    } catch (error) {
        dispatch({type: Post_Error, payload: error.response.data.message})
    }
    dispatch({type: Hide_Loader})
}