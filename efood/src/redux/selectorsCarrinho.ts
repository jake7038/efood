import type { RootState } from "./store";

export const selectItensCarrinho = (state: RootState) => state.carrinho.itens;


export const selectQuantidadeCarrinho = (state: RootState) =>
    state.carrinho.itens.length;

export const selectValorTotal = (state: RootState) =>
    state.carrinho.itens.reduce(
        (acc, e) => acc + e.preco,
        0
    );

