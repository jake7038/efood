import * as S from "./styles"
import type { Item } from "../../types/item"

export const ItemCarrinho = ({item}: {item: Item}) => {
    const getDescricao = (item.descricao.length > 130? item.descricao.slice(0,127) + '...' : item.descricao)


    return(
        <S.Div>
            <img src={item.foto} alt="" />
            <div>
                <h2> {item.nome} </h2>
                <p>
                    {getDescricao}
                </p>
                <button>Adicionar ao carrinho</button>
            </div>
        </S.Div>
    )
}