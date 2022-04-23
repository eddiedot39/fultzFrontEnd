import axios from "axios"

const API = axios.create({
  baseURL: "http://192.168.0.171:4000",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    Accept: "application/json"
  }
})

export default API
