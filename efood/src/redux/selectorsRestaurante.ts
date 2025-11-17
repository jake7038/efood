import type { RootState } from "./store";

export const selectRestaurantes = (state: RootState) => state.restaurantes.lista;
export const selectRestaurantesLoading = (state: RootState) => state.restaurantes.loading;
export const selectRestaurantesError = (state: RootState) => state.restaurantes.error;