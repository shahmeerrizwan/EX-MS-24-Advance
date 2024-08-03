import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    color: "Yellow",
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        increment: (state) => {
            state.color = "blue"
        }
    }
})

// Action creators are generated for each case reducer function
export const { setTheme } = themeSlice.actions

export default themeSlice.reducer