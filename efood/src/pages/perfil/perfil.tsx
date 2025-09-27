import { Footer } from "../../components/Footer/Footer"
import { HeaderPerfil } from "../../components/HeaderPerfil/HeaderPerfil"
import { ItemCarrinho } from "../../components/ItemCarrinho/ItemCarrinho"
import * as S from "./styles"

export const Perfil = () => {

    return(
    <>
        <HeaderPerfil/>
        <S.Container>
            <S.Banner>
                

            </S.Banner>
            <S.DivFlex>
                <ItemCarrinho/>
                <ItemCarrinho/>
                <ItemCarrinho/>
                <ItemCarrinho/>
                <ItemCarrinho/>
                <ItemCarrinho/>
            </S.DivFlex>
        </S.Container>
        <Footer/>
    </>

    )
}