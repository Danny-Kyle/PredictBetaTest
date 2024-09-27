import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPublishedWeeks, Week } from "@/utils/api";

export const fetchWeeks = createAsyncThunk('weeks/fetchWeeks', async() => {
    return await getPublishedWeeks();
})

const weeksSlice = createSlice({
    name: 'weeks',
    initialState: {weeks: [] as Week[], latestWeek: null as Week | null, loading: false},
    reducers: {},
    extraReducers: (builder) =>  {
        builder
            .addCase(fetchWeeks.pending, (state)=>{
                state.loading = true;
            })
            .addCase(fetchWeeks.fulfilled, (state, action)=>{
                state.weeks = action.payload;
                state.latestWeek = action.payload[0];
                state.loading = false
            });
    },
});

export default weeksSlice.reducer