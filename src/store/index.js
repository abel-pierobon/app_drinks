import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter";
import drinkReducer from "../features/drinkSlice";
import {api} from "../services/services";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "../services/authServices";

const store = configureStore({
    reducer: {
        counterReducer,
        drinkReducer,
        [api.reducerPath]: api.reducer,
        [authApi.reducerPath]: api.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
})
setupListeners(store.dispatch)
export default store