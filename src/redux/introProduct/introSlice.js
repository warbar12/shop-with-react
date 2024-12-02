import { createSlice } from "@reduxjs/toolkit";

const modalSlice =  createSlice({
    name: 'intro_product',
    initialState:{
        itemsInModal: []
    },
    reducers: {
        setItemInModal: (state, action ) => {
            state.itemsInModal = [action.payload]
        }
    }
});

export const {setItemInModal} = modalSlice.actions
export default modalSlice.reducer