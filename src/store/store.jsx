import { configureStore } from "@reduxjs/toolkit";
import AuthReduser from "../slice/auth"
import articleReduser from "../slice/article";
export default configureStore({
    reducer:{
        auth: AuthReduser, 
        article: articleReduser
    },
    devTools: process.env.NODE_ENV !== 'production',
})