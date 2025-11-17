import styled from 'styled-components'


export const Div = styled.div`
    width: 320px;
    height: 338px;
    padding-top: 8px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #E66767;
    

    img{
        width: 304px;
        height: 167px;
    }
    
    div{
        width: 304px;
        font-family: Roboto;
        font-weight: 900;
        font-style: Black;
        font-size: 16px;
        line-height: 100%;
        letter-spacing: 0%;
        display: flex; 
        flex-direction: column;
        height: 100%;  
        button{
            border:none;
            color: #E66767;
            width: 100%;
            background-color: #FFEBD9;
            font-weight: 700;
            cursor: pointer;
            min-height: 24px;
            margin-top: auto;
            margin-bottom: auto;
        }
        h2{
        text-align: start;
        color: #FFEBD9;
        font-size: 16px;
        
        }
        p{  
        text-align: start;
        color: #FFEBD9;
        font-size: 14px;
        font-weight: 400;
        }
    }
    @media (max-width: 768px) {
    width: 260px;
    height: 280px;

        img {
        width: 240px;
        height: 132px;
        }

        div {
        width: 240px;
        font-size: 14px;

        h2 {
            font-size: 14px;
        }

        p {
            font-size: 12px;
        }

        button {
            min-height: 20px;
            font-size: 13px;
        }
        }
    }
    

`