import { configureStore } from "@reduxjs/toolkit";
import pocket from "./slices"
const mystore=configureStore({
    reducer : { 
        expensereducer:pocket
    }
}
)
export default mystore;