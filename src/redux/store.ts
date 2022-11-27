import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './ui';
import { dataApi } from './data';

export const store = configureStore({
    reducer: {
        ui: uiReducer,
        [dataApi.reducerPath]: dataApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(dataApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;