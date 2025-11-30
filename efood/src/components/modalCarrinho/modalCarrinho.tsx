import { useSelector } from "react-redux";
import * as S from "./styles"
import { selectItensCarrinho, selectValorTotal } from "../../redux/selectorsCarrinho";
import { useDispatch } from "react-redux";
import { removerItem } from "../../redux/sliceCarrinho";

export const ModalCarrinho = ({ closeModal }: {  closeModal: (val: boolean) => void }) => {
    const arrayItens = useSelector(selectItensCarrinho);
    const total = useSelector(selectValorTotal)
    const dispatch = useDispatch();
    return(
        <S.Overlay onClick={() => closeModal(false)}>
            <S.Retangulo onClick={(e) => e.stopPropagation()}>
                {arrayItens?.map( (item) => <S.Item>
                    <img src={item.foto} alt="" />
                    <div>
                        <h4>{item.nome}</h4>
                        <p>  R$ {item.preco} </p>
                        <img onClick={() => dispatch(removerItem(item.id))} src="/assets/lixeira.png" alt="" />
                    </div>
                </S.Item>
                )}
                <S.ValorTotal>
                    <p>Valor total</p>
                    <p>R$ {total}</p>
                </S.ValorTotal>
                <button>
                    <p>Continuar com a entrega</p>
                </button>
            </S.Retangulo>
        </S.Overlay>
    )
}