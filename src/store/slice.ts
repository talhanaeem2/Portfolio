import { createSlice } from '@reduxjs/toolkit';

import AppStateInterface from './interface/AppSateInterface';

const initialState: AppStateInterface = {
    showModal: false,
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        openModal: (state) => {
            state.showModal = true;
        },
        closeModal: (state) => {
            state.showModal = false;
        },
    },
});

export const { openModal, closeModal } = appSlice.actions;
export default appSlice.reducer;
