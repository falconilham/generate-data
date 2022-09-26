import { createSlice } from '@reduxjs/toolkit';

import { dispatch } from '../store';

// ----------------------------------------------------------------------

const initialState = {
    listData: []
};


const slice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        changeData: (state, action) => {
            const data = action.payload
            return {
                ...state,
                listData: data
            }
        },
        addData: (state, action) => {
            const data = action.payload
            return {
                ...state,
                listData: [...state.listData, data]
            }
        },
        removeData: (state, action) => {
            const id = action.payload
            return {
                ...state,
                listData: state.listData.filter(item => item.id !== id)
            }
        }
    },
});

export function addData(payload) {
    dispatch(slice.actions.addData(payload));
}

export function removeData(payload) {
    dispatch(slice.actions.removeData(payload));
}

export function changeData(payload) {
    dispatch(slice.actions.changeData(payload));
}
export default slice.reducer;