import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Item } from "../types/item";

    interface CarrinhoState {
    itens: Item[];
    }

    const initialState: CarrinhoState = {
    itens: []
    };

    const carrinhoSlice = createSlice({
    name: "carrinho",
    initialState,
    reducers: {
        adicionarItem(state, action: PayloadAction<Item>) {
        state.itens.push(action.payload);
        },

        removerItem(state, action: PayloadAction<number>) {
        const id = action.payload;
        const index = state.itens.findIndex(i => i.id === id);

        if (index !== -1) {
        state.itens.splice(index, 1);
        }
        },

        limparCarrinho(state) {
        state.itens = [];
        }
    }
});

export const { adicionarItem, removerItem, limparCarrinho } = carrinhoSlice.actions;
export default carrinhoSlice.reducer;
