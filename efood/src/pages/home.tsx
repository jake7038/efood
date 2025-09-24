import { Header } from "../components/Header/Header"
import * as S from "./styles"
import { useState } from 'react'
import { DivItem } from "../components/Item/Item"
import type { Item } from "../types/item"


export const Home = () => {
    const [itens, setItens] = useState<Item[]>([{nome: 'Hioki Sushi', descricao: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!', urlParaFoto: 'src/assets/comida1.png', nota: 4.9},
        {nome: 'Hioki Sushi', descricao: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!', urlParaFoto: 'src/assets/comida2.png', nota: 4.7}]);
    
    return(
        <>
            <Header/>
            <S.Container>
                <S.DivFlex>
                {itens.map((item, index) => (
                    <DivItem key={index} item = {item} />
                ))}
                </S.DivFlex>
            </S.Container>
                
        </>
                

        )
}