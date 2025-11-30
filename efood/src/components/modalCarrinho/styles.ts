import styled from "styled-components";


export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left:0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: end;
    align-items: center;
    z-index: 999; 
`;

export const Retangulo = styled.div`
    background-color: #E66767;
    width: 360px;
    height: 100vh;
    opacity: 1;
    display: flex;
    flex-direction: column;
    color: #ffff;
    button{
            align-self: center;
            border:none;
            margin: 0;
            color: #E66767;
            width: 344px;
            height: 24px;
            background-color: #FFEBD9;
            font-weight: 700;
            cursor: pointer;
            min-height: 24px;
            p{
                margin: 0px;
            }
        }
`

export const ValorTotal = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: auto;
    padding: 6px; 
    font-family: Roboto;
    font-weight: 700;
    font-style: Bold;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: 0%;
    text-align: center;
    color: #ffff;
`