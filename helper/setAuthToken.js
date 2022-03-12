import API from "../plugins/API"

export default token => {
    if(token) API.defaults.headers.common['Authorization'] = `Bearer ${token}`
    else delete API.defaults.headers.common['Authorization']
}