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
    align-items: start;
    justify-items: start; 
    justify-content: space-between; 
    grid-template-columns: repeat(3, auto);
    gap:24px;
    padding-top: 40px;
    padding-left: 12%;
    padding-right:12%;
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

export const Banner = styled.div<{urlimage?: string} >`
    position: relative;
    min-width: 1366px;
    min-height: 280px;
    background: url(${props => props.urlimage}) center/cover no-repeat;
    padding: 12px 0 12px 15%;
    overflow: hidden;
    display: flex;
    flex-direction: column; 
    justify-content: space-between;
    padding-left: 12%;
    padding-right: 12%;

    @media (max-width: 1024px) {
    padding-left: 8%;
    padding-right: 8%;
    } 
    @media (max-width: 768px) {
    padding-left: 0%;
    padding-right: 0%;
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