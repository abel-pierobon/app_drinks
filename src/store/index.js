import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter";
import drinkReducer from "../features/drinkSlice";
import { api } from "../services/services";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "../services/authServices";
import authReducer from "../features/authSlice";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        drink: drinkReducer,
        auth: authReducer,
        [api.reducerPath]: api.reducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        })
            .concat(api.middleware)
            .concat(authApi.middleware),
});

setupListeners(store.dispatch);
export default store;
