import styled from "styled-components"

export const Container = styled.div`
      p{
        font-size:13px;
    }

    h1{
        margin:0;
        padding:0;
        font-size:26px;
    }

    hr{
        height:1px;
        border:0;
        background-color:#16195c;
        margin:30px 0;
    }

    label{
        font-size:13px; 
        display:block;
        margin:10px 0;
        input{
            display:block;
            margin-top:7px;
            box-sizing:border-box;
            width:100%;
            padding:20px 10px;
            border:2px solid #25cd89;
            border-radius:10px;
            color:white;
            outline:0;
            font-size:15px;
            background-image: linear-gradient(to right,  #00dbde,#fc00ff);
        }
    }

    button{
        background-image: linear-gradient(to right, #fc00ff, #00dbde);
        color:white;
        font-size:14px;
        font-weight:bold;
        padding:10px 40px;
        border:0;
        border-radius:30px;
        cursor:pointer;
        margin-top:30px;
        transition:.6s;

        &:hover{
            background-image: linear-gradient(to right, #fc00ff, #00dbde);
        }
    }
`