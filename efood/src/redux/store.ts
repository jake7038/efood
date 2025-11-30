import { configureStore } from "@reduxjs/toolkit";
import restaurantesReducer from "./sliceRestaurante.ts";
import carrinhoReducer from "./sliceCarrinho.ts";

export const store = configureStore({
    reducer: {
    carrinho: carrinhoReducer,
    restaurantes: restaurantesReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;