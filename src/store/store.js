import accountReducer from "./account"
import { configureStore } from "@reduxjs/toolkit"


const store=configureStore({
    reducer:{
        account:accountReducer,
    }
})
export default store;