import { createSlice } from '@reduxjs/toolkit';

//Create slice is used for preparing a slice of our global state
//when we have data that is not directly related, also we can craete different slices in different files to make our code more maintainable
const storeSlice = createSlice({
    name: 'store',
    initialState: {
        idProductStore: '',
        imgStore: null,
    },
    reducers: {
        setProductId(state, action) {
            state.idProductStore = action.payload;
        },

        setImage(state, action) {
            state.imgStore = action.payload;
        },
    },
});

export const storeActions = storeSlice.actions;
export default storeSlice;
