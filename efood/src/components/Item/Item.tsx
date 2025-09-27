import * as S from "./styles"
import type { Item as Itemprops } from "../../types/item"



export const DivItem = ({ item }: { item: Itemprops }) => {
    return(
        <S.Div>
            <S.DivImg imageUrl={item.url}>
                
            </S.DivImg>
            <S.DivContent>
                <S.DivFlexTitulo>
                    <div> {item.nome}  </div> <div> {item.nota+ " "} <img src="src/assets/estrela.png" alt="" /> </div>
                </S.DivFlexTitulo>
                <p>
                    {item.descricao}
                </p>
                <button>Saiba mais</button>
            </S.DivContent>
        </S.Div>
    )
}