import { createSlice } from '@reduxjs/toolkit';

interface ModalState {
    modal: boolean;
    registerModal: boolean;
    signupModal: boolean;
    loginModal: boolean;
}

const initialState: ModalState = {
    modal: false,
    registerModal: false,
    signupModal: false,
    loginModal: false,
};

const modalSlice = createSlice({
    name: 'modals',
    initialState,
    reducers: {
        toggleModal(state) {
            state.modal = !state.modal;
        },
        toggleRegisterModal(state) {
            state.registerModal = !state.registerModal;
            if (state.registerModal) {
                state.signupModal = false;
                state.loginModal = false;
            }
        },
        toggleSignupModal(state) {
            state.signupModal = !state.signupModal;
            if (state.signupModal) {
                state.registerModal = false;
                state.loginModal = false;
            }
        },
        toggleLoginModal(state) {
            state.loginModal = !state.loginModal;
            if (state.loginModal) {
                state.registerModal = false;
                state.signupModal = false;
            }
        }
    }
});

export const {
    toggleModal,
    toggleRegisterModal,
    toggleSignupModal,
    toggleLoginModal
} = modalSlice.actions;

export default modalSlice.reducer;
