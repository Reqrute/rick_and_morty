import { createSlice } from "@reduxjs/toolkit";

const initialState = {   
    email: null,
    token: null,
    userId: null,
    password: null,
    favorite: [],
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state , action) {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.userId = action.payload.userId;
            state.password = action.payload.password;
            state.favorite = action.payload.favorite;
        },
        removeUSer(state){
            state.email = null;
            state.token = null;
            state.userId = null;
            state.password = null;
            state.favorite = [];
        },
        addFavoriteCard (state, action){
            state.favorite = [...[state.favorite].flat(), action.payload.id]; 
        },
        removeFavoriteCard(state, action){
            state.favorite.splice(state.favorite.findIndex((id) => id === action.payload.id) ,1)
        }
    },
});

export const {setUser, removeUSer, addFavoriteCard, removeFavoriteCard} = userSlice.actions;

export default userSlice.reducer;