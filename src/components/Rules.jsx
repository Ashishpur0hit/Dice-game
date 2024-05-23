import React from "react";
import styled from "styled-components";
import { memo } from "react";

const Rules = React.memo(function Rules()
{
    return <RedBox>
        <h3>How to play dice game</h3>
        Select any number <br />
        Click on dice image <br />
        after click on dice if selected number is equal to dice number you will get same point as dice <br />
        if you get wrong guess then 2 point will be dedcuted
    </RedBox>
})

export default Rules;


const RedBox = styled.div`
width: 794px;
height:208px;
background-color:  #ffc8c8;
border-radius:7px;
padding:20px;
text-align:start;
font-size:16px;`;