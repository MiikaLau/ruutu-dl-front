import { createSlice } from '@reduxjs/toolkit';

interface UiState {
    selectedTitle: null | number;
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        selectedTitle: null,
    } as UiState,
    reducers: {
        setSelectedTitle: (state, action) => {
            state.selectedTitle = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const {
    setSelectedTitle,
} = uiSlice.actions;

export default uiSlice.reducer;