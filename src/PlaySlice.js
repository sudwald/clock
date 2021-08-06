import { createSlice } from '@reduxjs/toolkit';

const playSlice = createSlice({
    name: "playInfo",
    initialState: {
        lastPlayed: 13,
        gamesPlayed: 0,
        gamesWon: 0,
        gamesLost: 0
    },
    reducers: {
        updateLastPlayed: (state, action) => {
            state.lastPlayed = action.payload
        },
        postWin: (state, action) => {
            state.gamesPlayed++
            state.gamesWon++
        },
        postLoss: (state, action) => {
            state.gamesPlayed++
            state.gamesLost++
        },
    }
})

export const { updateLastPlayed, postWin, postLoss } = playSlice.actions;

export const getPlayInfo = state => state.playInfo;

export default playSlice.reducer;
