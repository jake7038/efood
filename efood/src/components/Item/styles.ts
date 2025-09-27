import styled from 'styled-components'

type Props = {
    imageUrl: string;
    };

export const Div = styled.div`
    width: 472px;
    height: 398px;
    background-color: #FFFFFF;
    border-width: 5px;
    border-style: dashed;
    border-color: #E66767;
`


export const DivImg = styled.div<Props>`
    width: 472px;
    height: 217px;
    background-image: url(${props => props.imageUrl});
    background-size: cover;
    display: flex;

`
export const retangulo = styled.div`
    width: 121px;
    background-color: #E66767;
`


export const DivContent = styled.div`
    padding: 6px;
    padding-left: 12px;
    font-size: 14px;
    font-family: 'Roboto';
    color: #E66767;
    img{
        position: relative;
        top: 1.5px;
    }
    button{
        border: none;
        color: #FFFF;
        width: 82px;
        height: 24px;
        background-color: #E66767;
        font-size: 14px;
        font-weight: bold;
        font-family: 'Roboto';
        cursor: pointer;
    }
`

export const DivFlexTitulo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    div{
        font-size: 18px;
        font-weight: bolder;
    }
    
`



