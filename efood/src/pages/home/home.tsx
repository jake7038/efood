import * as S from "./styles"
import { useState } from 'react'
import { Header } from "../../components/Header/Header"
import { Footer } from "../../components/Footer/Footer"
import { DivItem } from "../../components/Item/Item"
import type { Item } from "../../types/item"


export const Home = () => {
    const [itens] = useState<Item[]>([{nome: 'Hioki Sushi', descricao: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!', url: '/assets/comida1.png', nota: 4.9 ,tags: (["Destaque da semana", "Japoesa"])},
        {nome: 'La Dolce Vita Trattoria', descricao: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!', url: '/assets/comida2.png', nota: 4.7, tags:(["Italiana"])},
        {nome: 'La Dolce Vita Trattoria', descricao: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!', url: '/assets/comida2.png', nota: 4.7, tags:(["Italiana"])},
        {nome: 'La Dolce Vita Trattoria', descricao: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!', url: '/assets/comida2.png', nota: 4.7, tags:(["Italiana"])},

    ]);
    
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
            <Footer/>
        </>
                

        )
}