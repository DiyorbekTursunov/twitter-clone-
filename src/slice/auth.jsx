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
        singStart: state => {
            state.isLoading = true
        },
        singSuccesss: (state , action) => {
            state.loggetIn = true
            state.isLoading = false
            state.user = action.payload
        },
        singFail: (state , action) => {
            state.isLoading = false
            state.error = action.payload
        },
    }
})

export const {singStart , singSuccesss , singFail} = authSlice.actions

export default authSlice.reducer