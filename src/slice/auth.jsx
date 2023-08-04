import { createSlice } from "@reduxjs/toolkit";
import { setData } from "../helpers/local-storage";
const initialState = {
    isLoading:false,
    loggetIn: false,
    error: null, 
    user:null,
}

export const authSlice = createSlice({
    name:'auth',
    initialState, 
    reducers: {
        singStart: state => {
            state.isLoading = true
        },
        singSuccesss: (state , action) => {
            setData('token' , action.payload.token)
            state.loggetIn = true
            state.isLoading = false
            state.user = action.payload
        },
        singFail: (state , action) => {
            state.isLoading = false
            state.error = action.payload
        },
        logout: state => {
            state.loggetIn = false
            state.user = null
        }
    }
})

export const {singStart , singSuccesss , singFail , logout} = authSlice.actions

export default authSlice.reducer