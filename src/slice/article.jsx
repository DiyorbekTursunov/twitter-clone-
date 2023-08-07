import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false , 
    articls:[] ,
    articlDetail :null,
    error: null ,
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
        },



        getArticleDetailStart:(state) => {
            state.isLoading = true

        },
        getArticleDetailSuccess:(state , action) => {
            state.isLoading = false
            state.articlDetail = action.payload
        },
        getArticleDetailFail:(state , action) => {
            state.error = action.payload
        },


        postArticleStart: state => {
            state.isLoading = true
        },
        postArticleSuccsess:state => {
            state.isLoading = false
        },
        postArticleFail: (state , action)  => {
            state.isLoading = false
            state.error = action.payload
        }
    },
})

export const {  
    getArticleStart,
    getArticleSuccess,
    getArticleFail,
    getArticleDetailStart,
    getArticleDetailSuccess,
    getArticleDetailFail,
    postArticleStart,
    postArticleSuccsess,
    postArticleFail
} = articleSlice.actions
export default articleSlice.reducer