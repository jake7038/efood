import * as S from "./styles"
import { useNavigate } from 'react-router-dom';
import type { Restaurante } from "../../types/restaurante";


export const DivItem = ({ item }: { item: Restaurante }) => {
    
    const nav = useNavigate();

    const navegacao = () => {
        nav(`/perfil/${item.id}`);
    };
    
    return(
        <S.Div>
            <S.DivImg imageUrl={item.capa}>
                <S.DivAbsolute>
                        <S.retangulo>
                        <p> {item.tipo} </p>
                        </S.retangulo>

                </S.DivAbsolute>
                
            </S.DivImg>
            <S.DivContent>
                <S.DivFlexTitulo>
                    <div> {item.titulo}  </div> <div> {item.avaliacao+ " "} <img src="/assets/estrela.png" alt="" /> </div>
                </S.DivFlexTitulo>
                <p>
                    {item.descricao}
                </p>
                <button onClick={navegacao}>Saiba mais</button>
            </S.DivContent>
        </S.Div>
    )
}