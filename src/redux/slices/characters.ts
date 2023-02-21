import { createSlice } from "@reduxjs/toolkit";
import { fetchCharacters } from '../../api/characterApi/index'

const initialState = {
    characters: {
        items: [],
        status: 'loading'
    },
};

const postsSlice = createSlice({
    name: "characters",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchCharacters.pending, (state) => {
                state.characters.items = [];
                state.characters.status = 'loading';
            })
            .addCase(fetchCharacters.fulfilled, (state, action) => {
                state.characters.items = action.payload;
                state.characters.status = 'loaded';
            })
            .addCase(fetchCharacters.rejected, (state) => {
                state.characters.items = [];
                state.characters.status = 'error';
            })
    }
});

export const charactersReducer = postsSlice.reducer;