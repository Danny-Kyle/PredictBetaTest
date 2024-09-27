import { createSlice } from "@reduxjs/toolkit";

export interface Match {
    id: string;
}

interface MatchState {
    matches: Match[]
}

const initialState: MatchState = {
    matches: []
}

const matchslice = createSlice({
    name: "habits",
    initialState,
    reducers: {
        addMatch: () => {}
    },
})

export const {addMatch} = matchslice.actions;
export default matchslice.reducer;