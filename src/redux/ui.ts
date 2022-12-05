import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EpisodesQuery } from './data';

interface UiState {
    selectedTitle: null | EpisodesQuery;
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        selectedTitle: null,
    } as UiState,
    reducers: {
        setSelectedTitle: (state, action: PayloadAction<EpisodesQuery | null>) => {
            state.selectedTitle = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const {
    setSelectedTitle,
} = uiSlice.actions;

export default uiSlice.reducer;