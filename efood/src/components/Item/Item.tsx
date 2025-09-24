import * as S from "./styles"
import type { Item as Itemprops } from "../../types/item"

const Tag = ({ tag }: { tag: string }) => {
    return(
        <S.retangulo>
            <p>{tag}</p>
        </S.retangulo>
    )
}


export const DivItem = ({ item }: { item: Itemprops }) => {
    return(
        <S.Div>
            <S.DivImg>
                
            </S.DivImg>
            <div>
                <div>
                    {item.nome} <div> {item.nota}</div>
                </div>
                <p>
                    {item.descricao}
                </p>
                <button>Saiba Mais</button>
            </div>
        </S.Div>
    )
}