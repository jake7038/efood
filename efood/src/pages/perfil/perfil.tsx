import { ItemCarrinho } from "../../components/ItemCarrinho/ItemCarrinho"
import * as S from "./styles"
import { requisicao } from "../../api"
import { useEffect, useState } from "react"

type teste = {
    id: number,
    titulo: string,
    destacado: string,
    avaliacao: string,
    capa: string,
    descricao: string,
    tipo: string,
    cardapio: string
}


export const Perfil = () => {


    const [teste, setTest] = useState<teste[]>([])

    useEffect(() => {
        async function carregar() {
            const dados = await requisicao()
            console.log(dados)
            setTest(dados)
        }
        carregar()
        
    }, [])

    return(

    <>
        
        <S.Container>
            <S.Banner>
                <h3>Italiana</h3>

                <p>La Dolce Vita Trattoria {teste[0]?.titulo}</p>

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
        
    </>

    )
}