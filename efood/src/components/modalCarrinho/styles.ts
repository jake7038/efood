import styled from "styled-components";


export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left:0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: end;
    align-items: center;
    z-index: 999; 
    overflow: hidden;
`;

export const Retangulo = styled.div`
    background-color: #E66767;
    width: 360px;
    height: 100vh;
    opacity: 1;
    overflow-y: scroll;
`

export const Car = styled.div`
    display: flex;
    flex-direction: column;
    color: #ffff;
    
    overflow-x: hidden;
    button{
            align-self: center;
            border:none;
            margin: 0;
            color: #E66767;
            width: 344px;
            height: 24px;
            background-color: #FFEBD9;
            font-weight: 700;
            cursor: pointer;
            min-height: 24px;
            p{
                margin: 0px;
            }
        }
`

export const ValorTotal = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: auto;
    padding: 6px; 
    font-family: Roboto;
    font-weight: 700;
    font-style: Bold;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: 0%;
    text-align: center;
    color: #ffff;
`


export const Item = styled.div`
    display: grid;
    grid-template-columns: 35%  65%;
    background-color: #FFEBD9;
    margin: 6px 12px;
    width: 342px;
    gap: 4px;
    img{
        align-self: center;
        width: 100%;
        height: 80%;
        object-fit: cover;
        margin: 0px 8px;
    }
    div{
        color: #E66767;
        display: flex;
        flex-direction: column;
        justify-content:center;
        
        text-align: start;
        padding: 0px 8px;
        h4{
        font-family: Roboto;
        font-weight: 900;
        font-style: Black;
        font-size: 18px;
        line-height: 100%;
        letter-spacing: 0%;
        }
        p{
        font-family: Roboto;
        font-weight: 400;
        font-style: Regular;
        font-size: 14px;
        line-height: 22px;
        letter-spacing: 0%;
        margin-top: 0px;
        }
        img{
            width: 16px;
            margin-left: auto;
            cursor: pointer;
        }
    }
`

export const Address = styled.form`
    color: #FFEBD9;
    padding: 8px;
    display: flex;
    flex-direction: column;
    h4{
    font-family: Roboto;
    font-weight: 700;
    font-style: Bold;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0%;
    margin: 8px 0px 16px 0px;
    }
    label{
        font-family: Roboto;
        font-weight: 600;
        font-style: normal;
        font-size: 14px;
        line-height: 100%;
        letter-spacing: 0%;

    }
    div{
        display: flex;
        flex-direction: column;
        gap: 4px;
        margin-bottom: 4px;
    }
    .DobleDiv{
        display: flex;
        flex-direction: row;
        gap: 12px;
    }
    button{
        min-height: 24px;
        margin-top: auto;
        margin-bottom: auto;
        margin-top: 8px;
        border:none;
        color: #E66767;
        width: 100%;
        background-color: #FFEBD9;
        font-weight: 700;
        
        cursor: pointer;
        
    }
    input{
        background-color: #FFEBD9;
        height: 30px;
        border: none;
    }
    .buttonsDiv{
        margin-top: 8px;
    }
`


export const Payment = styled.form`
    color: #FFEBD9;
    padding: 8px;
    display: flex;
    flex-direction: column;
    h4{
    font-family: Roboto;
    font-weight: 700;
    font-style: Bold;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0%;
    margin: 8px 0px 16px 0px;
    }
    label{
        font-family: Roboto;
        font-weight: 600;
        font-style: normal;
        font-size: 14px;
        line-height: 100%;
        letter-spacing: 0%;

    }
    div{
        display: flex;
        flex-direction: column;
        gap: 4px;
        margin-bottom: 4px;
    }
    .DobleDiv{
        display: flex;
        flex-direction: row;
        gap: 22px;
    }

    .DobleDivNotDivided{
        display: flex;
        flex-direction: row!important;
        gap: 22px;
        > div {
                min-width: 0;
                display: flex;
                
            }
    }
    .DobleDivNotDivided > div:first-child{
            flex: 7;
        }
    .DobleDivNotDivided > div:last-child{
            flex: 3;
        }

    button{
        min-height: 24px;
        margin-top: auto;
        margin-bottom: auto;
        margin-top: 8px;
        border:none;
        color: #E66767;
        width: 100%;
        background-color: #FFEBD9;
        font-weight: 700;
        
        cursor: pointer;
        
    }
    input{
        background-color: #FFEBD9;
        height: 30px;
        border: none;
    }
    .buttonsDiv{
        margin-top: 8px;
    }
`