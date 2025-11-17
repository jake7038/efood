import {
    fetchRestaurantesStart,
    fetchRestaurantesSuccess,
    fetchRestaurantesError,
} from "./sliceRestaurante.ts";
import type { AppDispatch } from "./store.ts";

export const fetchRestaurantes = () => {
    
    return async (dispatch: AppDispatch) => {
    dispatch(fetchRestaurantesStart());

    try {
        const res = await fetch("https://api-ebac.vercel.app/api/efood/restaurantes");
        const data = await res.json();

        dispatch(fetchRestaurantesSuccess(data));
    } catch (error) {
        dispatch(fetchRestaurantesError("Erro ao carregar restaurantes"));
    }
    };
};
