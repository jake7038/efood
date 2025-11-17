import styled from 'styled-components'

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left:0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999; 
`;

export const Retangulo = styled.div`
    width: 1024px;
    height: 344px;
    opacity: 1;
    top: 490px;
    left: 171px;
    background-color: #E66767;
    display: flex;
    flex-direction: column;
    box-sizing: border-box; 
    padding: 8px;
    img{
        width: 16px;
        align-self: flex-end;
        cursor: pointer;
        padding-bottom: 8px;
    }
    
`
export const ConteudoGrid = styled.div`
    display: grid;
        grid-template-columns: 30% 70%;
        padding: 12px;
        padding-bottom:  12px;
        gap: 16px;
        height: 300px;
        img {
        padding: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        }
`


export const Conteudo = styled.div`
    padding: 0;
    justify-content: center;
    box-sizing: border-box; 
    padding: 4px;
    button{
        border:none;
        color: #E66767;
        width: auto;
        background-color: #FFEBD9;
        font-weight: 700;
        cursor: pointer;
        min-height: 16px;
        
    }
    h3{
    margin-top: 0px;
    width: 140;
    height: 21;
    opacity: 1;
    top: 522px;
    left: 507px;
    font-family: Roboto;
    font-weight: 900;
    font-style: Black;
    font-size: 18px;
    line-height: 100%;
    letter-spacing: 0%;
    color: #FFFFFF;
    }
    p{
        font-family: Roboto;
    font-weight: 400;
    font-style: Regular;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0%;
    color: #FFFFFF;
    }
`
