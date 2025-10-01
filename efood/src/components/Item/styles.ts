import styled from 'styled-components'

type Props = {
    imageUrl: string;
    };

export const Div = styled.div`
    width: 472px;
    height: 398px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
`


export const DivImg = styled.div<Props>`
    width: 472px;
    height: 217px;
    background-image: url(${props => props.imageUrl});
    background-size: cover;
    background-position: center;
    position: relative;
    display: flex;
    align-content: flex-end;
    justify-content: end;
    flex-direction: row;

`
export const  DivAbsolute = styled.div`
    position: absolute;
    display: flex;
    margin-top: 16px;
    margin-right: 16px;
    gap: 8px;
`

export const retangulo = styled.div`
    height: 26px;
    background-color: #E66767;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: default;
    p{
    margin: 0px;
    padding: 4px;
    font-family: Roboto;
    font-weight: 700;
    font-style: Bold;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: 0%;
    text-align: center;
    color: #FFEBD9;
    }
`


export const DivContent = styled.div`
    padding: 6px;
    padding-left: 12px;
    font-size: 14px;
    flex: 1;
    font-family: 'Roboto';
    color: #E66767;
    border-width: 1px;
    border-style: solid;
    border-color: #E66767;
    border-top: none;
    img{
        position: relative;
        top: 1.5px;
    }
    button{
        border: none;
        margin-top: 10px;
        color: #FFFF;
        width: 82px;
        height: 24px;
        background-color: #E66767;
        font-size: 14px;
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



