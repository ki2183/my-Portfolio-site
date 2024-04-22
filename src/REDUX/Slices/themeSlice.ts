import { darkTheme, lightTheme, Theme } from '../SliceTypes';
import { RootState } from './../store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: Theme = darkTheme;

export const counterSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        change_theme: (state,action:PayloadAction<"light"|"dark">) => {
            const theme = action.payload
            localStorage.setItem('theme',theme)
            return { ...state, ...(theme === "light" ? lightTheme : darkTheme)}

        }
    }
})

export const { change_theme } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.theme

export default counterSlice.reducer