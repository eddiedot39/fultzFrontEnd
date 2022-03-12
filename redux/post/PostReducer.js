import { Get_Post, Get_Posts, Post_Error } from "../constants";

const initialState = {
    post: {},
    posts: [],
    error: ''
}

export default (state = initialState, action) => {
    const {type, payload} = action
    switch (type) {
        case Get_Posts:
            return {...state, posts: payload}
        case Get_Post:
            return {...state, post: payload}
        case Post_Error:
            return {...state, error: payload}
        default:
            return state
    }
}