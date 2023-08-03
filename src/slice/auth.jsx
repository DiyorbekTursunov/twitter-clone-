import { createSlice } from "@reduxjs/toolkit";
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
        //login
        loginUserStart: state => {
            state.isLoading = true
        },
        loginUserSuccess: state => {

        },
        loginUserFail: state => {

        },

        //register

        registerUserStart: state => {
            state.isLoading = true
        },
        registerUserSuccess: state => {
            state.loggetIn = true
            state.isLoading = false
        },
        registerUserFail: state => {
            state.isLoading = false
            state.error = 'error'
        },
    }
})

export const {loginUserStart , registerUserStart , registerUserSuccess , registerUserFail} = authSlice.actions

export default authSlice.reducer