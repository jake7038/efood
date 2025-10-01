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
    min-width: 1366px;
    min-height: 280px;
    background-image: url("/assets/apresentacao.png");
    background-repeat: no-repeat;
    background-size: cover;
`