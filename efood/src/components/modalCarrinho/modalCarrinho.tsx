import { useSelector } from "react-redux";
import * as S from "./styles"
import { selectItensCarrinho, selectValorTotal } from "../../redux/selectorsCarrinho";
import { useDispatch } from "react-redux";
import { removerItem } from "../../redux/sliceCarrinho";
import { useState } from "react";
import type { Products } from "../../types/product";
import type { Payment } from "../../types/payment";
import type { Delivery } from "../../types/delivery";
export const ModalCarrinho = ({ closeModal }: {  closeModal: (val: boolean) => void }) => {
    
    const [isInCar, setIsInCar] = useState(true)
    const [isInAddress, setIsInAddress] = useState(false)
    const [isInPayment, setIsInPayment] = useState(false)

    const [products, setProducts] = useState<Products | null>(null)
    const [delivery, setDelivery] = useState<Delivery | null>(null)
    const [payment, setPayment] = useState<Payment | null>(null)

    const [modalDelivery, setModalDelivery] = useState({
        receiver: "",
        address: "",
        city: "",
        zipcode: "",
        number: "",
        complement: ""
    })

    const [modalPayment, setModalPayment] = useState({
        name: "",
        number: "",
        code: "",
        month: "",
        year: ""
    })

    const arrayItens = useSelector(selectItensCarrinho);
    const total = useSelector(selectValorTotal).toString().replace(".",",")
    const dispatch = useDispatch();

    const changeModal =  (isBack?: boolean) => {
        if(isInCar){
            setIsInCar(false)
            setIsInAddress(true)
        }else{
            if(isInPayment){
                setIsInPayment(false)
                setIsInAddress(true)
            }else{
            if(isInAddress){
                if(isBack){
                    setIsInAddress(false)
                    setIsInCar(true)
                }else{
                    setIsInAddress(false)
                    setIsInPayment(true)
                }
            }
            }
            
        }
        
    }   

    const saveProduct = () => {
        const val : Products  = {
            product: arrayItens.reduce((acc, item, index) => {
                acc[index] = {
                id: item.id,
                price: item.preco,
                };
                return acc;
            }, {} as Record<number, { id: number; price: number }>)
            }
        setProducts(val)
        changeModal()
    }

    const saveDelivery = () => {

        const Delivery : Delivery = {
        receiver: modalDelivery.receiver,
        address: {
        description: modalDelivery.address,
        city: modalDelivery.city,
        zipcode: modalDelivery.zipcode,
        number: Number(modalDelivery.number),
        complement: modalDelivery.complement
        }
        }
        setDelivery(Delivery)
        changeModal(false)
    }
    const savePayment = () => {
        
        const Payment: Payment = {
        card : {
            name: 	modalPayment.name,
            number:	modalPayment.number,
            code:	Number(modalPayment.code)
        },
        expires: {
            month:	Number(modalPayment.month),
            year: Number(modalPayment.year)
        }
        }
        setPayment(Payment)
        
    }

    const SendRequisition= () => {
        
    }

    return(
        <S.Overlay onClick={() => closeModal(false)}>
            <S.Retangulo onClick={(e) => e.stopPropagation()}>
                {isInCar && (
                    <S.Car>
                        {arrayItens?.map( (item) => <S.Item>
                            <img src={item.foto} alt="" />
                            <div>
                                <h4>{item.nome}</h4>
                                <p>  R$ {item.preco} </p>
                                <img onClick={() => dispatch(removerItem(item.id))} src="/assets/lixeira.png" alt="" />
                            </div>
                        </S.Item>)}
                        <S.ValorTotal>
                            <p>Valor total</p>
                            <p>R$ {total}</p>
                        </S.ValorTotal>
                        <button onClick={() => saveProduct()}>
                            <p>Continuar com a entrega</p>
                        </button>
                    </S.Car>
                )}
                {isInAddress && (
                    <S.Address>
                        <h4>Entrega</h4>
                        <div>
                            <label htmlFor="">Quem irá receber</label>
                            <input onChange={(e) => setModalDelivery({...modalDelivery, receiver: e.target.value})}
                            type="text" />
                        </div>
                        <div>
                            <label htmlFor="">Endereço</label>
                            <input onChange={(e) => setModalDelivery({...modalDelivery, address: e.target.value})} 
                            type="text" />
                        </div>
                        <div>
                            <label htmlFor="">Cidade</label>
                            <input onChange={(e) => setModalDelivery({...modalDelivery, city: e.target.value})}  
                            type="text" />
                        </div>
                        <div className="DobleDiv">
                            <div>
                                <label htmlFor="">CEP</label>
                                <input  onChange={(e) => setModalDelivery({...modalDelivery, zipcode: e.target.value})}  
                                type="text" />
                            </div>
                            <div>
                                <label htmlFor="">Número</label>
                                <input onChange={(e) => setModalDelivery({...modalDelivery, number: e.target.value})}   
                                type="text" />
                            </div>  
                        </div>
                        <div>
                            <label htmlFor="">Complemento (opcional)</label>
                            <input onChange={(e) => setModalDelivery({...modalDelivery, complement: e.target.value})}   
                            type="text" />
                        </div>
                        <div className="buttonsDiv">
                            <button type="button" onClick={() => saveDelivery()} >Continuar com o pagamento</button>
                            <button type="button" onClick={() => changeModal(true)}>Voltar para o carrinho</button>
                        </div>
                        
                    </S.Address>
                )}
                {isInPayment && (
                    <S.Payment>
                        <h4>Pagamento - Valor a pagar R$ {total}</h4>
                        <div>
                            <label htmlFor="">Nome no cartão</label>
                            <input onChange={(e) => setModalPayment({...modalPayment, name: e.target.value})}
                            type="text" />
                        </div>
                        <div className="DobleDivNotDivided">
                            <div>
                                <label htmlFor="">Número do cartão</label>
                                <input onChange={(e) => setModalPayment({...modalPayment, number: e.target.value})} 
                                type="text" />
                            </div>
                            <div>
                                <label htmlFor="">CVV</label>
                                <input onChange={(e) => setModalPayment({...modalPayment, code: e.target.value})} 
                                type="text" />
                            </div>  
                        </div>
                        <div className="DobleDiv">
                            <div>
                                <label htmlFor="">Mês de vencimento</label>
                                <input onChange={(e) => setModalPayment({...modalPayment, month: e.target.value})}
                                type="text" />
                            </div>
                            <div>
                                <label htmlFor="">Ano de vencimento</label>
                                <input onChange={(e) => setModalPayment({...modalPayment, year: e.target.value})}
                                type="text" />
                            </div>  
                        </div>
                        <div className="buttonsDiv">
                            <button type="button" onClick={() => savePayment()} >Finalizar pagamento</button>
                            <button type="button" onClick={() => changeModal()}>Voltar para a edição de endereço</button>
                        </div>
                    </S.Payment>
                )}

            </S.Retangulo>
        </S.Overlay>
    )
}