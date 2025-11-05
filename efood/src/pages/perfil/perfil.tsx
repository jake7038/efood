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
                <h3>Italiana</h3>

                <p>La Dolce Vita Trattoria</p>

            </S.Banner>
            <S.DivGrid>
                <ItemCarrinho/>
                <ItemCarrinho/>
                <ItemCarrinho/>
                <ItemCarrinho/>
                <ItemCarrinho/>
                <ItemCarrinho/>
            </S.DivGrid>
        </S.Container>
        <Footer/>
    </>

    )
}