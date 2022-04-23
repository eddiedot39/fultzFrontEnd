import { Create_Post, Get_Post, Get_Posts, Get_User_Posts, Post_Error, Remove_Post } from "../constants";

const initialState = {
    post: {},
    posts: [],
    userPosts: [],
    error: ''
}

export default (state = initialState, action) => {
    const {type, payload} = action
    switch (type) {
        case Get_Posts:
            return {...state, posts: payload}
        case Get_User_Posts:
            return {...state, userPosts: payload}
        case Get_Post:
            return {...state, post: payload}
        case Post_Error:
            return {...state, error: payload}
        case Create_Post:
            const {posts, userPosts} = payload
            return {...state, posts, userPosts}
        default:
            return state
    }
}