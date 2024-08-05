import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./ThemeSlice";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'


const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}
const persistedReducer = persistReducer(persistConfig, themeReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});


const persister = persistStore(store)

export { store, persister };