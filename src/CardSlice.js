import { createSlice } from '@reduxjs/toolkit';
import { cards } from './Cards';

const initialState = [
    {SRC: cards.cAC, ownPos: '1', flipped: false},
    {SRC: cards.cAH, ownPos: '1', flipped: false},
    {SRC: cards.cAS, ownPos: '1', flipped: false},
    {SRC: cards.cAD, ownPos: '1', flipped: false},
    {SRC: cards.c2C, ownPos: '2', flipped: false},
    {SRC: cards.c2H, ownPos: '2', flipped: false},
    {SRC: cards.c2S, ownPos: '2', flipped: false},
    {SRC: cards.c2D, ownPos: '2', flipped: false},
    {SRC: cards.c3C, ownPos: '3', flipped: false},
    {SRC: cards.c3H, ownPos: '3', flipped: false},
    {SRC: cards.c3S, ownPos: '3', flipped: false},
    {SRC: cards.c3D, ownPos: '3', flipped: false},
    {SRC: cards.c4C, ownPos: '4', flipped: false},
    {SRC: cards.c4H, ownPos: '4', flipped: false},
    {SRC: cards.c4S, ownPos: '4', flipped: false},
    {SRC: cards.c4D, ownPos: '4', flipped: false},
    {SRC: cards.c5C, ownPos: '5', flipped: false},
    {SRC: cards.c5H, ownPos: '5', flipped: false},
    {SRC: cards.c5S, ownPos: '5', flipped: false},
    {SRC: cards.c5D, ownPos: '5', flipped: false},
    {SRC: cards.c6C, ownPos: '6', flipped: false},
    {SRC: cards.c6H, ownPos: '6', flipped: false},
    {SRC: cards.c6S, ownPos: '6', flipped: false},
    {SRC: cards.c6D, ownPos: '6', flipped: false},
    {SRC: cards.c7C, ownPos: '7', flipped: false},
    {SRC: cards.c7H, ownPos: '7', flipped: false},
    {SRC: cards.c7S, ownPos: '7', flipped: false},
    {SRC: cards.c7D, ownPos: '7', flipped: false},
    {SRC: cards.c8C, ownPos: '8', flipped: false},
    {SRC: cards.c8H, ownPos: '8', flipped: false},
    {SRC: cards.c8S, ownPos: '8', flipped: false},
    {SRC: cards.c8D, ownPos: '8', flipped: false},
    {SRC: cards.c9C, ownPos: '9', flipped: false},
    {SRC: cards.c9H, ownPos: '9', flipped: false},
    {SRC: cards.c9S, ownPos: '9', flipped: false},
    {SRC: cards.c9D, ownPos: '9', flipped: false},
    {SRC: cards.c10C, ownPos: '10', flipped: false},
    {SRC: cards.c10H, ownPos: '10', flipped: false},
    {SRC: cards.c10S, ownPos: '10', flipped: false},
    {SRC: cards.c10D, ownPos: '10', flipped: false},
    {SRC: cards.cJC, ownPos: '11', flipped: false},
    {SRC: cards.cJH, ownPos: '11', flipped: false},
    {SRC: cards.cJS, ownPos: '11', flipped: false},
    {SRC: cards.cJD, ownPos: '11', flipped: false},
    {SRC: cards.cQC, ownPos: '12', flipped: false},
    {SRC: cards.cQH, ownPos: '12', flipped: false},
    {SRC: cards.cQS, ownPos: '12', flipped: false},
    {SRC: cards.cQD, ownPos: '12', flipped: false},
    {SRC: cards.cKC, ownPos: '14', flipped: false, id: 'king1'},
    {SRC: cards.cKH, ownPos: '14', flipped: false, id: 'king2'},
    {SRC: cards.cKS, ownPos: '14', flipped: false, id: 'king3'},
    {SRC: cards.cKD, ownPos: '14', flipped: false, id: 'king4'},
]

const cardSlice = createSlice({
    name: "cardInfo",
    initialState: initialState,
    reducers: {
        randomiseCards: (state, action) => {
            let j = 0
            let tempi = 0
            
            for (let i=0; i<52; i++) {
                state[i].flipped = false
            }
            for (let i=0; i<52; i++) {
                j = Math.round(Math.random() * (51))
                tempi = state[i]
                state[i] = state[j]
                state[j] = tempi
            }
        },
        flipCard: (state, action) => {
            state[action.payload].flipped = true;
        }
    }
})

export const { randomiseCards, flipCard } = cardSlice.actions;

export const getCards = state => state.cardInfo;

export default cardSlice.reducer;