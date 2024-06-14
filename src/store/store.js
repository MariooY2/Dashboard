import FlipReducer from "./Flip"
import { configureStore } from "@reduxjs/toolkit"


const store=configureStore({
    reducer:{
        switch:FlipReducer,
    }
})
export default store;