import styled from 'styled-components'

export const Header = styled.header`
    width: 100%;
    box-sizing: border-box;
    padding: 40px 160px 40px 160px;
    overflow-x: none;
    background-image:  url("src/assets/fundo.png");
    color: red;
    top:0;
    display: flex;
    justify-content: center;   
    align-items: center; 
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    img{
        text-align: center;
        
        width: 125px;
    }
    p{
        margin: 0px;
        font-family: Roboto;
        font-weight: 900;
        font-style: Black;
        font-size: 18px;
        line-height: 100%;
        letter-spacing: 0%;
        text-align: right;
        color: #E66767;
        cursor: pointer;
    }

`