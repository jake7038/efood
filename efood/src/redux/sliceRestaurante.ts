import { createSlice } from "@reduxjs/toolkit";

const restaurantesSlice = createSlice({
    name: "restaurantes",
    initialState: {
    lista: [],     
    loading: false,
    error: null,
    },
    reducers: {
    fetchRestaurantesStart(state) {
        state.loading = true;
        state.error = null;
    },
    fetchRestaurantesSuccess(state, action) {
        state.loading = false;
        state.lista = action.payload; 
    },
    fetchRestaurantesError(state, action) {
        state.loading = false;
        state.error = action.payload;
    },
    },
});

export const {
    fetchRestaurantesStart,
    fetchRestaurantesSuccess,
    fetchRestaurantesError,
} = restaurantesSlice.actions;

export default restaurantesSlice.reducer;