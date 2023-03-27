import { configureStore } from "@reduxjs/toolkit";
import pocket from "./slices"
const mystore=configureStore({
    reducers : { 
        expensereducer:pocket
    }
}
)
export default mystore;