import * as S from "./styles"
import { useNavigate } from 'react-router-dom';
import type { Item as Itemprops } from "../../types/item"



export const DivItem = ({ item }: { item: Itemprops }) => {
    
    const nav = useNavigate();

    const navegacao = () => {
        nav('/perfil');
    };
    
    return(
        <S.Div>
            <S.DivImg imageUrl={item.url}>
                <S.DivAbsolute>
                    {item.tags.map((tag, index) => (
                        <S.retangulo key={index}>
                        <p> {tag} </p>
                        </S.retangulo>
                    ))}
                </S.DivAbsolute>
                
            </S.DivImg>
            <S.DivContent>
                <S.DivFlexTitulo>
                    <div> {item.nome}  </div> <div> {item.nota+ " "} <img src="src/assets/estrela.png" alt="" /> </div>
                </S.DivFlexTitulo>
                <p>
                    {item.descricao}
                </p>
                <button onClick={navegacao}>Saiba mais</button>
            </S.DivContent>
        </S.Div>
    )
}