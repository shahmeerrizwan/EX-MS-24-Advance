import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./ThemeSlice";


const store = configureStore({
    reducer: themeReducer
});


export default store;