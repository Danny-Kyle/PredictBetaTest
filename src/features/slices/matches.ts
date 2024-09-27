import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { getMatches, Match } from "@/utils/api";

export interface MatchState {
  matches: Match[];
  loading: boolean;
  error: string | null;
}

const initialState: MatchState = {
  matches: [],
  loading: false,
  error: null,
};

export const fetchMatches = createAsyncThunk<Match[], {seasonId: string; weekId: string;}>('matches/fetchMatches', async ({seasonId, weekId}) => {
  return await getMatches(seasonId, weekId);
});

const matchSlice = createSlice({
  name: 'matches',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMatches.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMatches.fulfilled, (state, action: PayloadAction<Match[]>) => {
        state.matches = action.payload;
        state.loading = false;
      })
      .addCase(fetchMatches.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred';
      });
  },
});

export default matchSlice.reducer;