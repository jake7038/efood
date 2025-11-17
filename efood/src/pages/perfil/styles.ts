import styled from 'styled-components'

export const Container = styled.div`
    overflow-x: hidden;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding-bottom: 50px;
    background-color:rgb(252, 222, 196);
    
`


export const GridBackground = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

`

export const DivGrid = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
    gap:24px;
    padding-top: 40px;
    padding-left: 10%;
    padding-right:10%;
    width:100%;
    max-width: 1440px;
    box-sizing: border-box;
    & > :nth-child(3n + 1) {
    justify-self: start;
    }

    & > :nth-child(3n + 2) {
    justify-self: center;
    }

    & > :nth-child(3n + 3) {
    justify-self: end;
    }
    
    @media (max-width: 1024px) {
    padding-left: 8%;
    padding-right: 8%;
    } 
    @media (max-width: 768px) {
    padding-left: 0%;
    width: auto;
    padding-right: 0%;
    justify-items: center; 
    align-items: center;
    justify-content: center; 
    grid-template-columns: repeat(1, auto);
    }
    
`

export const Banner = styled.div`
    position: relative;
    min-height: 280px;
    background: url("/assets/comida2.png") center/cover no-repeat;
    padding: 12px 0;
    overflow: hidden;
    width: 100%;
    display: flex;
    justify-content: center;
    

    div{
    max-width: 1440px;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column; 
    justify-content: space-between;
    padding-left: 10%;
    padding-right:10%;
    @media (max-width: 1024px) {
    padding-left: 8%;
    padding-right: 8%;
    } 
    @media (max-width: 768px) {
    padding-left: 0%;
    padding-right: 0%;
    }
    h3 {
    position: relative;
    z-index: 1;
    font-family: Roboto;
    font-weight: 100;
    font-style: normal;
    font-size: 32px;
    color: rgba(255, 255, 255, 0.7);
    font-variation-settings: "wght" 100;
    }

    p{
    font-family: Roboto;
    font-weight: 900;
    font-style: Black;
    font-size: 32px;
    line-height: 100%;
    letter-spacing: 0%;
    color: #FFFFFF;
    z-index: 1;
    }
    }

    

    &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5); 
    z-index: 0;
    }

    
`