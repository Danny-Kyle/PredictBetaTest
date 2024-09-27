import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSeasons, Season } from "@/utils/api";

export const fetchSeasons = createAsyncThunk('seasons/fetchSeasons', async() => {
    return await getSeasons();
})

const seasonsSlice = createSlice({
    name: 'seasons',
    initialState: {seasons: [] as Season[], latestSeason: null as Season | null, loading: false},
    reducers: {},
    extraReducers: (builder) =>  {
        builder
            .addCase(fetchSeasons.pending, (state)=>{
                state.loading = true;
            })
            .addCase(fetchSeasons.fulfilled, (state, action)=>{
                state.seasons = action.payload;
                state.latestSeason = action.payload[0];
                state.loading = false
            });
    },
});

export default seasonsSlice.reducer