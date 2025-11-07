import styled from 'styled-components'

export const Container = styled.div`
    overflow-x: hidden;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding-bottom: 50px;
    background-color:rgb(252, 222, 196);
    
`


export const DivGrid = styled.div`
    display: grid;
    justify-content: center;
    align-content: center;
    align-items: center;
    justify-items: center;
    grid-template-columns: repeat(3, auto);
    gap:24px;
    padding-top: 40px;
    padding-left: 20%;
    padding-right: 20%;
    
`

export const Banner = styled.div`
    position: relative;
    min-width: 1366px;
    min-height: 280px;
    background: url("/assets/comida2.png") center/cover no-repeat;
    padding: 12px 0 12px 15%;
    overflow: hidden;
    display: flex;
    flex-direction: column; 
    justify-content: space-between;
    padding-left:20%;
    padding-right: 20%;

    @media (max-width: 1024px) {
    padding-left: 10%;
    padding-right: 10%;
    } 
    @media (max-width: 768px) {
    padding-left: 5%;
    padding-right: 5%;
    }

    &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5); 
    z-index: 0;
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
`