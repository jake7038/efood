import * as S from "./styles"
import type { Item } from "../../types/item"

export const ItemCarrinho = ({item, onClickMoreDetails}: {item: Item, onClickMoreDetails: () => void}) => {

    const getDescricao = (item.descricao.length > 160? item.descricao.slice(0,157) + '...' : item.descricao)
    

    return(
        <S.Div>
            <img src={item.foto} alt="" />
            <div>
                <h2> {item.nome} </h2>
                <p>
                    {getDescricao}
                </p>
                <button onClick={onClickMoreDetails}>Mais detalhes</button>
            </div>
        </S.Div>
    )
}