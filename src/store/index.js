import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./slices/userSlice";
import initReducer from "./slices/initSlice"
import sideReducer from "./slices/sideSlice"

export const store = configureStore({
    reducer: {
        user: userReducer,
        init : initReducer,
        side : sideReducer,
     }
});
