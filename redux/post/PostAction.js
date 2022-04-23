import { Easing, Notifier, NotifierComponents } from "react-native-notifier"
import API from "../../plugins/API"
import { Get_Posts, Get_User_Posts, Post_Error, Get_Post, Create_Post } from "../constants"

export const getAllPostsRequest = () => async dispatch => {
  try {
    const res = await API.get("/post")
    dispatch({ type: Get_Posts, payload: res.data })
  } catch (error) {
    dispatch({ type: Post_Error, payload: error.response.data.message })
  }
}

export const getUserPosts = () => async dispatch => {
  try {
    const res = await API.get("/post/user")
    dispatch({ type: Get_User_Posts, payload: res.data })
  } catch (error) {
    console.log(error.response)
    dispatch({ type: Post_Error, payload: error.response.data.message })
  }
}

export const getPostById = (id, setPopup) => async dispatch => {
  try {
    const res = await API.get(`/post/${id}`)
    dispatch({ type: Get_Post, payload: res.data })
    setPopup(true)
  } catch (error) {
    console.log(error.response)
    dispatch({ type: Post_Error, payload: error.response.data.message })
  }
}

export const createPostRequest = (body) => async dispatch => {
  try {
    const res = await API.post('/post', {body})
    dispatch({type: Create_Post, payload: res.data})
    Notifier.showNotification({
      title: 'Sukses',
      animationDuration: 1500,
      showAnimationDuration: 300,
      showEasing: Easing.ease,
      hideOnPress: false,
      Component: NotifierComponents.Alert,
      componentProps: {
        alertType: 'success'
      }
    });
  } catch (error) {
    Notifier.showNotification({
      title: 'Error',
      description: error.response.data.message,
      animationDuration: 1500,
      showAnimationDuration: 300,
      showEasing: Easing.ease,
      hideOnPress: false,
      Component: NotifierComponents.Alert,
      componentProps: {
        alertType: 'error'
      }
    });
    console.log(error.response)
  }
}