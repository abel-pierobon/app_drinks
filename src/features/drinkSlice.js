import { createSlice } from "@reduxjs/toolkit";

export const drinkSlice= createSlice({
    name: "drink",
    initialState: {
        value: {
            categorySelected:"",
            itemIdSelected:"",
            userId:"",
        }
    },
    reducers: {
        setCategorySelected: (state, action) => {
            state.value.categorySelected = action.payload
        },
        setItemIdSelected: (state, {payload}) => {
            state.value.itemIdSelected = payload
        },
    }
})
export const { setCategorySelected, setItemIdSelected } = drinkSlice.actions
export default drinkSlice.reducer