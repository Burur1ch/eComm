import { configureStore } from "@reduxjs/toolkit";
import cartRuducer from "./"
import LoadingReducer from "./"
import produxtReducer from "./"

export const store = configureStore({
    reducer:{
        cartRuducer,
        produxtReducer,
        LoadingReducer

    },
    devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch