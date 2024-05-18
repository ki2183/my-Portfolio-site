import { RootState } from './../store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: number = 0;

export const ViewNumSlice = createSlice({
    name: 'viewNumber',
    initialState,
    reducers: {
        chanage_view_number:(state,action:PayloadAction<number>)=>{
            return action.payload
        }
    }
})

export const { chanage_view_number } = ViewNumSlice.actions
export const selectCount = (state: RootState) => state.viewNum
export default ViewNumSlice.reducer