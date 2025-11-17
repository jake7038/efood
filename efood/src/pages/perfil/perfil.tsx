import { Footer } from "../../components/Footer/Footer"
import { HeaderPerfil } from "../../components/HeaderPerfil/HeaderPerfil"
import { ItemCarrinho } from "../../components/ItemCarrinho/ItemCarrinho"
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectRestaurantes } from "../../redux/selectorsRestaurante";
import type { Restaurante } from "../../types/restaurante";
import type { Item } from "../../types/item"
import * as S from "./styles"

export const Perfil = () => {
    const { id } = useParams();
    const restaurantes: Restaurante[] = useSelector(selectRestaurantes);
    const restaurante = restaurantes.find(r => r.id === Number(id));
    
    return(
    <>
        <HeaderPerfil/>
        <S.Container>
            <S.Banner>
                <h3>{restaurante?.tipo}</h3>

                <p>{restaurante?.titulo}</p>

            </S.Banner>
            <S.DivGrid>
                {restaurante?.cardapio.map((item, index) =>
                    <ItemCarrinho item={item} key={index} />
                )}
            </S.DivGrid>
        </S.Container>
        <Footer/>
    </>

    )
}