import styled from 'styled-components'

export const Header = styled.header`
    width: 100vw;
    background-image:  url("/assets/fundo.png");
    color: red;
    top:0;
    display: flex;
    justify-content: center;   
    align-items: center; 
    flex-direction: column;
    
    img{
        text-align: center;
        padding-top: 40px;
        padding-bottom: 80px;
        width: 125px;
    }
    p{
        text-align: center;
        font-family: 'Roboto', Arial, sans-serif;
        font-weight: 900;
        line-height: 100%;
        color: #E66767;
        max-width: 539px;
        font-size: 36px;
        letter-spacing: 0;
        padding-bottom: 25px;
    }

`