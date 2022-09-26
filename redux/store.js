import { configureStore, combineReducers } from '@reduxjs/toolkit';
import dataSlice from './slices/data';

const rootReducer = combineReducers({
    data: dataSlice,
});

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
            // immutableCheck: false,
        }),
});

const { dispatch } = store;

export { dispatch, store };