import * as S from "./styles"
import { useNavigate } from 'react-router-dom';

export const HeaderPerfil = () => {
const nav = useNavigate();

    const navegacao = () => {
        nav('/');
    };

    return(
        <S.Header>
            <p onClick={navegacao}>Restaurantes</p>
            <img src="/assets/logo.png" alt="" />
            <p className="contador">0 produtos no carrinho</p>
        </S.Header>
    )
}