import { createSlice } from "@reduxjs/toolkit";

const initialState = {  
    search: '',
    species: '',
    gender: '',
    status: '',
    pageNumber: 1,
};

const sideSlice = createSlice({
    name: 'side',
    initialState,
    reducers: {
        setSearch(state , action) {
            state.search = action.payload.search;
        },
        setSpecies(state , action) {
            state.species = action.payload.species;
        },
        setGender(state , action) {
            state.gender = action.payload.gender;
        },
        setStatus(state , action) {
            state.status = action.payload.status;
        },
        setPageNumber(state , action) {
            state.pageNumber = action.payload.pageNumber;
        },
        removeFilters(state)
        {
            state.species = "";
            state.gender = "";
            state.status = "";
            state.pageNumber = 1;
        }
        
    },
});

export const {setSearch, setSpecies, setGender,setStatus,setPageNumber,removeFilters} = sideSlice.actions;

export default sideSlice.reducer;