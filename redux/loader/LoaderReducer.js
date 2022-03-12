import { Hide_Loader, Show_Loader } from "../constants"

export default (state = false, action) => {
    switch (action.type) {
        case Show_Loader:
            return true
        case Hide_Loader:
            return false
        default: 
            return state
    }
}