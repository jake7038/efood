import * as S from "./styles"

export const ItemCarrinho = () => {
    return(
        <S.Div>
            <img src="/assets/image 3.png" alt="" />
            <div>
                <h2> Pizza Marguerita </h2>
                <p>
                    A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!
                </p>
                <button>Adicionar ao carrinho</button>
            </div>
        </S.Div>
    )
}