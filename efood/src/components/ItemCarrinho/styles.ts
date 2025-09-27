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
    text-align: start;

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
        button{
            border:none;
            color: #E66767;
            width: 100%;
            background-color: #FFEBD9;
            font-weight: 700;
            cursor: pointer;
            min-height: 24px;
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
    
    

`