import { createSlice } from "@reduxjs/toolkit";

const initialState = {  
    info: {},
    result : [],
};

const initSlice = createSlice({
    name: 'init',
    initialState,
    reducers: {
        setInit(state , action) {
            state.info = action.payload.info;
            state.result = action.payload.result;
        },
    },
});

export const {setInit} = initSlice.actions;

export default initSlice.reducer;