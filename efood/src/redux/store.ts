import { configureStore } from "@reduxjs/toolkit";
import restaurantesReducer from "./sliceRestaurante.ts";

export const store = configureStore({
    reducer: {
    restaurantes: restaurantesReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;