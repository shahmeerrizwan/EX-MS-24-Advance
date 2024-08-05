import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./ThemeSlice";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, themeReducer)

const store = configureStore({
    reducer: persistedReducer
});


const persister = persistStore(store)

export { store, persister };