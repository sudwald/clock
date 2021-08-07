import { createSlice } from '@reduxjs/toolkit';

const playSlice = createSlice({
    name: "playInfo",
    initialState: {
        lastPlayed: 13,
        gamesPlayed: 0,
        gamesWon: 0
    },
    reducers: {
        updateLastPlayed: (state, action) => {
            state.lastPlayed = action.payload
        },
        postPlay: (state, action) => {
            state.gamesPlayed++
        },
        postWin: (state, action) => {
            state.gamesWon++
        }
    }
})

export const { updateLastPlayed, postPlay, postWin } = playSlice.actions;

export const getPlayInfo = state => state.playInfo;

export default playSlice.reducer;
