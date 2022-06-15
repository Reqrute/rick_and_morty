import { createSlice } from "@reduxjs/toolkit";

const initialState = {  
    air_date: "",
    name : "",
    result : [],
};

const episodeSlice = createSlice({
    name: 'episode',
    initialState,
    reducers: {
        setInfo(state , action) {
            state.air_date = action.payload.air_date;
            state.name = action.payload.name;  
        },
        setResults(state , action) {
            state.result = action.payload.result;
        },
    },
});

export const {setInfo,setResults} = episodeSlice.actions;

export default episodeSlice.reducer;