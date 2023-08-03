import { configureStore } from "@reduxjs/toolkit";
import AuthReduser from "../slice/auth"
export default configureStore({
    reducer:{
        auth: AuthReduser, 
    },
    devTools: process.env.NODE_ENV !== 'production',
})