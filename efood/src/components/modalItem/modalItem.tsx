import * as S from "./styles"
import type { Item } from "../../types/item"
import { adicionarItem } from "../../redux/sliceCarrinho"
import { useDispatch  } from "react-redux"

export const ModalItem = ({ item, onClose }: { item: Item, onClose: () => void }) => {
        const dispatch = useDispatch();
    return(
        <S.Overlay>
            <S.Retangulo>
                <img onClick={onClose} src="/assets/close.png" alt="" />
                <S.ConteudoGrid>
                    <img src={item.foto} alt="" />
                    <S.Conteudo>
                            <h3>
                                {item.nome}
                            </h3>
                            <>
                                <p>{item.descricao}</p>
                                <p>Serve: {item.porcao}</p>
                            </>
                            
                            <button onClick={() => dispatch(adicionarItem(item))}>Adicionar ao carrinho - R$ {item.preco}</button>
                    </S.Conteudo>
                </S.ConteudoGrid>
                
            </S.Retangulo>
            
        </S.Overlay>
    )

}
