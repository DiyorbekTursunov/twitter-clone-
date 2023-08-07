import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLoading: false , 
    users:null ,
    error:null ,
}
export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers: {
        getUserStart: (state) => {
            state.isLoading = true
        },
        getUserSuccsess: (state , action) => {
            state.isLoading = false
            state.users = action.payload
        },
        getUserFail: (state , action) => {
            state.isLoading = false 
            state.error = action.payload
        }
    }
})

export const {
    getUserStart,
    getUserSuccsess,
    getUserFail,
} = userSlice.actions

export default userSlice.reducer