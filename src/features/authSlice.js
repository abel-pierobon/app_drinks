import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        value: {
            user: null,
            token: null,
            localId: null,
        }
    },
    reducers: {
        setUser: (state, action) => {
            state.value = {
                user: action.payload.email,
                token: action.payload.idToken,
                localId: action.payload.localId
            }
        },
        clearUser: (state) => {
            state.value.user = null
            state.value.token = null
            state.value.localId = null
        }
    }
})

export const {setUser, clearUser} = authSlice.actions

export default authSlice.reducer