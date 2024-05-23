import React from "react";
import styled from "styled-components";
import { memo } from "react";


const Score = React.memo(function Score({score})
{
    console.log("Score rerendered");
    return <Main>
        <h1>{score}</h1>
        <h3>Total Score</h3>
    </Main>
})




export default Score;


const Main = styled.div`
width: 200px;
margin:0px;
text-align: center;
padding: 10px;


h1{
    margin: auto;
    font-size: 70px;
}

h3{
    margin: 0%;
}

`;