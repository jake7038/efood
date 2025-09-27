import styled from 'styled-components'

export const Container = styled.div`
    overflow-x: hidden;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding-bottom: 50px;
    background-color:rgb(252, 222, 196);
    
`


export const DivFlex = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap:24px;
    padding-top: 40px;
    flex-wrap: wrap;
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