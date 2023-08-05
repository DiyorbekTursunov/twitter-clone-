import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false , 
    articls:[] ,
    error: null
}

export const articleSlice = createSlice({
    name:'article',
    initialState,
    reducers: {
        getArticleStart: state =>{
            state.isLoading = true 
        },
        getArticleSuccess: (state , action) => {
            state.isLoading = false
            state.articls = action.payload
        },
        getArticleFail:( state , action)=> {
            state.error = action.payload
        }
    },
})

export const {getArticleStart , getArticleSuccess , getArticleFail} = articleSlice.actions
export default articleSlice.reducer