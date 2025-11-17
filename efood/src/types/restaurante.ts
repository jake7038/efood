import type { Item } from "./item";
export type Restaurante = {
    titulo: string;
    destacado: boolean;
    tipo: string;
    avaliacao: number;
    id: number;
    descricao: string;
    capa: string;
    cardapio: Item[];
    };
