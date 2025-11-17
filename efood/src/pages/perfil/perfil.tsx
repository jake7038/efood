import { Footer } from "../../components/Footer/Footer"
import { HeaderPerfil } from "../../components/HeaderPerfil/HeaderPerfil"
import { ItemCarrinho } from "../../components/ItemCarrinho/ItemCarrinho"
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectRestaurantes } from "../../redux/selectorsRestaurante";
import { ModalItem } from "../../components/modalItem/modalItem"
import type { Restaurante } from "../../types/restaurante";
import * as S from "./styles"
import { useState } from "react";
import type { Item } from "../../types/item";

export const Perfil = () => {

    const [modalItem, setModalItem] = useState<Item | null>(null);

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
                    <ItemCarrinho  item={item} key={index} onClickMoreDetails={() => setModalItem(item)} />
                )}
            </S.DivGrid>
        </S.Container>
        <Footer/>
        {modalItem && (
        <ModalItem item={modalItem}  onClose={() => setModalItem(null)}/>
        )}
    </>

    )
}