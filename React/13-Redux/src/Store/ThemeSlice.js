import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    color: "white",
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: (state, data) => {
            state.color = data.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const { setTheme } = themeSlice.actions

export default themeSlice.reducer