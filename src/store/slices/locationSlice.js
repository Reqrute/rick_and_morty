import { createSlice } from "@reduxjs/toolkit";

const initialState = {  
    dimension: "",
    type: "",
    name : "",
    result : [],
};

const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        setInfo(state , action) {
            state.dimension = action.payload.dimension;
            state.type = action.payload.type;
            state.name = action.payload.name;  
        },
        setResults(state , action) {
            state.result = action.payload.result;
        },
    },
});

export const {setInfo,setResults} = locationSlice.actions;

export default locationSlice.reducer;

