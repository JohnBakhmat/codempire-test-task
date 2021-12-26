import { createSlice } from '@reduxjs/toolkit'
import { AppDispatch, RootState } from '.';
import Country from '../models/Country';

interface ModalStoreType {
	isShown: Boolean,
	data: null | Country
}

const initialState: ModalStoreType = {
	isShown: true,
	data: new Country("123", "Albania", 2, 3, 4),
}

const modalStore = createSlice({
	name: "modal",
	initialState,
	reducers: {
		changeData: (state, action) => ({ ...state, data: action.payload }),
		changeShown: (state) => ({ ...state, isShown: !state.isShown })
	}
});

//Selectors
export const selectIsShow = (state: RootState) => state.modal.isShown
export const selectData = (state: RootState) => state.modal.data

//Actions
export const changeModalData = (data: Country) => (dispatch: AppDispatch) => {
	dispatch(changeData(data))
}
export const changeModalShown = () => (dispatch: AppDispatch) => {
	dispatch(changeShown())
}

//Exports
export const {
	changeData,
	changeShown
} = modalStore.actions
export default modalStore.reducer