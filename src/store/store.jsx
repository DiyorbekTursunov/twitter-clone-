import { configureStore } from "@reduxjs/toolkit";
import AuthReduser from "../slice/auth"
import articleReduser from "../slice/article";
import userSlice  from "../slice/user";
export default configureStore({
    reducer:{
        auth: AuthReduser, 
        article: articleReduser ,
        user: userSlice ,
    },
    devTools: process.env.NODE_ENV !== 'production',
})