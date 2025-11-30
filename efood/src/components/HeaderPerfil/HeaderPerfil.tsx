import * as S from "./styles"
import { useNavigate } from 'react-router-dom';
import { selectQuantidadeCarrinho } from "../../redux/selectorsCarrinho";
import { useSelector } from "react-redux";

export const HeaderPerfil = ({ openModal }: {  openModal?: (val:boolean) => void }) => {
    const nav = useNavigate();
    const quantidade = useSelector(selectQuantidadeCarrinho);
    const navegacao = () => {
        nav('/');
    };
    

    return(
        <S.Header>
            <p onClick={navegacao}>Restaurantes</p>
            <img src="/assets/logo.png" alt="" />
            <p onClick={() => openModal?.(true)} className="contador">{quantidade} produtos no carrinho</p>
        </S.Header>
    )
}