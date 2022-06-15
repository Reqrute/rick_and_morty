import { createSlice } from "@reduxjs/toolkit";

const initialState = {   
    email: null,
    token: null,
    userId: null,
    favotite: [],
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state , action) {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.userId = action.payload.userId;
            state.favotite = action.payload.favotite;
        },
        removeUSer(state){
            state.email = null;
            state.token = null;
            state.userId = null;
            state.favotite = [];
        },
        addFavoriteCard (state, action){
            state.favotite.push(action.payload.id); 
        },
        removeFavoriteCard(state, action){
            state.favotite.splice(state.favotite.findIndex((id) => id === action.payload.id) ,1)
        }
    },
});

export const {setUser, removeUSer, addFavoriteCard, removeFavoriteCard} = userSlice.actions;

export default userSlice.reducer;