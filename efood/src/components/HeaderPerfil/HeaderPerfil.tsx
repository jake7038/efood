import * as S from "./styles"
import { useNavigate } from 'react-router-dom';

export const HeaderPerfil = () => {
const nav = useNavigate();

    const navegacao = () => {
        nav('/');
    };

    return(
        <S.Header>
            <div>
            <p onClick={navegacao}>Restaurantes</p>
            <img src="/assets/logo.png" alt="" />
            <p className="contador">0 produtos no carrinho</p>
            </div>
            
        </S.Header>
    )
}