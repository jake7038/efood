import * as S from "./styles"
import { useSelector, useDispatch } from "react-redux";
import { selectRestaurantes, selectRestaurantesLoading, selectRestaurantesError } from "../../redux/selectorsRestaurante";
import { fetchRestaurantes } from "../../redux/actionRestaurante";
import { useEffect, useState } from 'react'
import { Header } from "../../components/Header/Header"
import { Footer } from "../../components/Footer/Footer"
import { DivItem } from "../../components/Item/Item"
import type { Item } from "../../types/item"
import type { Restaurante } from "../../types/restaurante";
import type { AppDispatch } from "../../redux/store";


export const Home = () => {
    const dispatch = useDispatch<AppDispatch>();

    const restaurantes:Restaurante[]  = useSelector(selectRestaurantes);
    const loading = useSelector(selectRestaurantesLoading);
    const error = useSelector(selectRestaurantesError);

    useEffect(() => {
        dispatch(fetchRestaurantes());
    }, [dispatch]);
    
    
    
    return(
        <>
            <Header/>
            <S.Container>
                <S.DivGrid>
                {restaurantes.map((item:Restaurante) => (
                    <DivItem key={item.id} item = {item} />
                ))}
                </S.DivGrid>
            </S.Container>
            <Footer/>
        </>
                

        )
}