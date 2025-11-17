import * as S from "./styles"
import type { Item } from "../../types/item"

export const ModalItem = ({ item, onClose }: { item: Item, onClose: () => void }) => {
    
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
                            
                            <button>Adicionar ao carrinho - R$ {item.preco}</button>
                    </S.Conteudo>
                </S.ConteudoGrid>
                
            </S.Retangulo>
            
        </S.Overlay>
    )

}
