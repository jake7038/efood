import { useSelector } from "react-redux";
import * as S from "./styles"
import { selectItensCarrinho, selectValorTotal } from "../../redux/selectorsCarrinho";
import { useDispatch } from "react-redux";
import { removerItem, limparCarrinho } from "../../redux/sliceCarrinho";
import { useState } from "react";
import type { Products } from "../../types/product";
import type { Payment } from "../../types/payment";
import type { Delivery } from "../../types/delivery";

export const ModalCarrinho = ({ closeModal }: {  closeModal: (val: boolean) => void }) => {
    
    const [isInCar, setIsInCar] = useState(true)
    const [isInAddress, setIsInAddress] = useState(false)
    const [isInPayment, setIsInPayment] = useState(false)
    const [isInOrder, setIsInOrder] = useState(false)


    const [products, setProducts] = useState<Products | null>(null)
    const [delivery, setDelivery] = useState<Delivery | null>(null)

    const[orderID, setOrderID] = useState(null)


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

    const validateDelivery = (): boolean => {
        const errors: string[] = [];

        if (!modalDelivery.receiver.trim()) {
            errors.push("Nome do recebedor é obrigatório.");
        }

        if (!modalDelivery.address.trim()) {
            errors.push("Endereço é obrigatório.");
        }

        if (!modalDelivery.city.trim()) {
            errors.push("Cidade é obrigatória.");
        }

        if (!modalDelivery.zipcode.trim()) {
            errors.push("CEP é obrigatório.");
        } else if (!/^\d{8}$/.test(modalDelivery.zipcode.replace("-", ""))) {
            errors.push("CEP inválido. Use 8 dígitos numéricos.");
        }

        if (!modalDelivery.number.trim()) {
            errors.push("Número é obrigatório.");
        } else if (isNaN(Number(modalDelivery.number))) {
            errors.push("Número deve ser numérico.");
        }

        if (errors.length > 0) {
            alert(errors.join("\n"));
            return false;
        }

        return true;
    };

    const validatePayment = (): boolean => {
        const errors: string[] = [];

        if (!modalPayment.name.trim()) {
            errors.push("Nome no cartão é obrigatório.");
        }

        if (!modalPayment.number.trim()) {
            errors.push("Número do cartão é obrigatório.");
        } else if (!/^\d{16}$/.test(modalPayment.number.replace(/\s/g, ""))) {
            errors.push("Número do cartão deve ter 16 dígitos.");
        }

        if (!modalPayment.code.trim()) {
            errors.push("CVV é obrigatório.");
        } else if (!/^\d{3}$/.test(modalPayment.code)) {
            errors.push("CVV deve ter 3 dígitos.");
        }

        if (!modalPayment.month.trim()) {
            errors.push("Mês é obrigatório.");
        } else if (Number(modalPayment.month) < 1 || Number(modalPayment.month) > 12) {
            errors.push("Mês inválido (1-12).");
        }

        if (!modalPayment.year.trim()) {
            errors.push("Ano é obrigatório.");
        } else if (!/^\d{4}$/.test(modalPayment.year)) {
            errors.push("Ano deve ter 4 dígitos.");
        } else if (Number(modalPayment.year) < new Date().getFullYear()) {
            errors.push("Ano de vencimento inválido.");
        }

        if (errors.length > 0) {
            alert(errors.join("\n"));
            return false;
        }

        return true;
    };


    const changeModal =  (isBack?: boolean) => {
        if(isInCar){
            setIsInCar(false)
            setIsInAddress(true)
        }else{
            if(isInPayment){
                if(isBack){
                setIsInPayment(false)
                setIsInAddress(true)
                }else{
                    setIsInPayment(false)
                    setIsInOrder(true)
                }
                
            }else{
            if(isInAddress){
                if(isBack){
                    setIsInAddress(false)
                    setIsInCar(true)
                }else{
                    setIsInAddress(false)
                    setIsInPayment(true)
                }
            }else{
            setIsInOrder(false)
            closeModal(false)
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
        if (!validateDelivery()) return null

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
    const savePayment = async () => {
        if (!validatePayment()) return null 
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
        return Payment
    }

    const SendRequisition= async () => {
        
        const payment = await savePayment()
        if (!payment) return;
        const body = {
            products,
            delivery,
            payment
        }
        try {
        const res = await fetch("https://api-ebac.vercel.app/api/efood/checkout", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
        });
        const { orderId } = await res.json();
        setOrderID(orderId)
        changeModal(false)
        console.log(orderId)
    }catch(e){
        console.error(e);
    }

    }

    const cleanCar = () => {
        setProducts(null)
        setDelivery(null)
        setOrderID(null)
        dispatch(limparCarrinho())
        changeModal()
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
                        <button onClick={arrayItens.length > 0 ?() => saveProduct() : () => {}}>
                            <p>Continuar com a entrega</p>
                        </button>
                    </S.Car>
                )}
                {isInAddress && (
                    <S.Address>
                        <h4>Entrega</h4>
                        <div>
                            <label htmlFor="">Quem irá receber</label>
                            <input value={modalDelivery.receiver} onChange={(e) => setModalDelivery({...modalDelivery, receiver: e.target.value})}
                            type="text" />
                        </div>
                        <div>
                            <label htmlFor="">Endereço</label>
                            <input value={modalDelivery.address} onChange={(e) => setModalDelivery({...modalDelivery, address: e.target.value})} 
                            type="text" />
                        </div>
                        <div>
                            <label htmlFor="">Cidade</label>
                            <input value={modalDelivery.city} onChange={(e) => setModalDelivery({...modalDelivery, city: e.target.value})}  
                            type="text" />
                        </div>
                        <div className="DobleDiv">
                            <div>
                                <label htmlFor="">CEP</label>
                                <input value={modalDelivery.zipcode}  onChange={(e) => setModalDelivery({...modalDelivery, zipcode: e.target.value})}  
                                type="text" />
                            </div>
                            <div>
                                <label htmlFor="">Número</label>
                                <input value={modalDelivery.number} onChange={(e) => setModalDelivery({...modalDelivery, number: e.target.value})}   
                                type="text" />
                            </div>  
                        </div>
                        <div>
                            <label htmlFor="">Complemento (opcional)</label>
                            <input value={modalDelivery.complement} onChange={(e) => setModalDelivery({...modalDelivery, complement: e.target.value})}   
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
                            <button type="button" onClick={() => SendRequisition()} >Finalizar pagamento</button>
                            <button type="button" onClick={() => changeModal(true)}>Voltar para a edição de endereço</button>
                        </div>
                    </S.Payment>
                )}
                {isInOrder && (
                    <S.Order>
                        <h4>Pedido realizado - {orderID}</h4>
                        
                        <p>Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido. </p>    
                        <p>Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.</p>     
                        <p>Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição. </p>    
                        <p>Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!</p>    

                        <button onClick={() => cleanCar()}>Concluir</button>
                    </S.Order>
                )}

            </S.Retangulo>
        </S.Overlay>
    )
}