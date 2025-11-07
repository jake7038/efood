import styled from 'styled-components'

export const Header = styled.header`
    width: 100%;
    box-sizing: border-box;
    padding: 40px 160px 40px 160px;
    overflow-x: none;
    background-image:  url("assets/fundo.png");
    color: red;
    top:0;
    display: flex;
    justify-content: center;   
    align-items: center; 
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 20%;
    padding-right: 20%;
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
    @media (max-width: 1024px) {
    padding: 30px 10%;
    } 
    @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 16px;
    padding: 20px 8%;
    }

`