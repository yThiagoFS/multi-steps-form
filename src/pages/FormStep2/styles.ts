import styled from "styled-components"

export const Container = styled.div`

     button{
        background-image: linear-gradient(to right, #fc00ff, #00dbde);
        color:white;
        font-size:14px;
        font-weight:bold;
        padding:10px 40px;
        border:0;
        border-radius:30px;
        cursor:pointer;
        
        &:hover{
            background-image: linear-gradient(to right, #fc00ffaa, #00dbdeaa);
        }

    }
`