import styled from "styled-components";
import React, { useState } from "react";
import { memo } from "react";


const SelectNumber = React.memo(function SelectNumber({selectedNumber,setSelectedNumber})
{
    
    console.log("Select Number Component Rerendered");
    const array = [1,2,3,4,5,6];


    return <div>
        <List>
        {array.map((value , i)=>(
             <Box  isselected={value === selectedNumber}   key = {i}  onClick={()=>{setSelectedNumber(value)}}><h3>{value}</h3></Box>
        ))}
    </List>
    <h3>Select Number</h3>
    </div>
})

export default SelectNumber; 


const List = styled.div`
display: flex;
gap: 5px;
margin-right:20px;
`;


const Box = styled.div`
height: 72px;
width: 72px;
border: 2px solid;
text-align : center;
background-color: ${({ isselected }) => (isselected ? "black" : "white")};
color:${({ isselected }) => (isselected ? "white" : "black")} ;
`;