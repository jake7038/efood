import { useSelector } from "react-redux";
import * as S from "./styles"
import { selectItensCarrinho } from "../../redux/selectorsCarrinho";

export const ModalCarrinho = ({ closeModal }: {  closeModal: (val: boolean) => void }) => {
    const arrayItens = useSelector(selectItensCarrinho);

    return(
        <S.Overlay onClick={() => closeModal(false)}>
            <S.Retangulo onClick={(e) => e.stopPropagation()}>
                {arrayItens?.map( (index) => <p>aaaaa</p>
                )}
                <S.ValorTotal>
                    <p>Valor total</p>
                    <p>R$ 182,70</p>
                </S.ValorTotal>
                <button>
                    <p>Continuar com a entrega</p>
                </button>
            </S.Retangulo>
        </S.Overlay>
    )
}