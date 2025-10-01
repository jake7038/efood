import styled from 'styled-components'

export const Container = styled.div`
    overflow-x: hidden;
    width: 100%;
    padding-right: auto;
    padding-left: auto;
    padding-top: 50px;
    padding-bottom: 50px;
    background-color:rgb(252, 222, 196);
    
`

export const DivGrid = styled.div`
    display: grid;
    justify-content: center;
    align-content: center;
    align-items: center;
    justify-items: center;
    grid-template-columns: repeat(2, auto);
    gap: 30px 50px;
`
