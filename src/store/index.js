import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter";
import drinkReducer from "../features/drinkSlice";

export default configureStore({
    reducer: {
        counterReducer,
        drinkReducer
    }
})
