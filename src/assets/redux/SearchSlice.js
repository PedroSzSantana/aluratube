import { createSlice } from "@reduxjs/toolkit";


export const SerachSlice = createSlice({
    name: 'Serach',
    initialState: {
        SearchValue: ""
    },
    reducers:{
        getSearchValue:(state, action)=>{
            state.SearchValue = action.payload
        }
    }
})
export const { getSearchValue } = SerachSlice.actions;

export default SerachSlice.reducer;