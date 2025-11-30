import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Item } from "../types/item";

export interface ItensCarrinho {
    item: Item;
    quantidade: number;
    }

    interface CarrinhoState {
    itens: ItensCarrinho[];
    }

    const initialState: CarrinhoState = {
    itens: []
    };

    const carrinhoSlice = createSlice({
    name: "carrinho",
    initialState,
    reducers: {
        adicionarItem(state, action: PayloadAction<Item>) {
        const item = action.payload;
        const existente = state.itens.find(i => i.item.id === item.id);

        if (existente) {
            existente.quantidade++;
        } else {
            state.itens.push({ item, quantidade: 1 });
        }
        },

        removerItem(state, action: PayloadAction<number>) {
        const id = action.payload;
        state.itens = state.itens.filter(i => i.item.id !== id);
        },

        limparCarrinho(state) {
        state.itens = [];
        }
    }
});

export const { adicionarItem, removerItem, limparCarrinho } = carrinhoSlice.actions;
export default carrinhoSlice.reducer;
