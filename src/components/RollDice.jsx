import styled from "styled-components";
import { useState } from "react";
import Rules from "./Rules";
function RollDice({currentDice,random,setScore})
{
    

    const [showRules,setShowRules]=useState(false);


    return <MainDiv>
        
        <Container>
        <img onClick={random}  src={`/drawable/dice_${currentDice}.png`} alt="DiceImage"/>
        <p>Click On Dice to roll</p>
        <button className="Button" id="reset" onClick={()=>{setScore(0)}}>Reset Score</button>
        <br></br>
        <button onClick={()=>{setShowRules(!showRules)}} className="Button"  id="show"> {showRules?"Hide Rules":"Show Rukes"}  </button>

        <div>
        {showRules?<Rules/>:<div/>}
        </div>


    </Container>
    </MainDiv>
}

export default RollDice;



const MainDiv = styled.div`
display : flex;
justify-content: center;
align-items:center;`;

const Container = styled.div`
width:794px;
margin-top: 50px;
text-align: center;

img{
    height: 250px;
    width: 250px;
    margin: unset;
    padding: unset;
}

p{
    font-weight: 700;
    padding: unset;
}

.Button{
    background-color: black;
color: white;
border-radius: 5px;
padding: 10px;
border: 0cap;
width: 220px;
transition: 0.3s background ease-in;
border: 1px solid transparent;
cursor: pointer;
margin-bottom: 20px;
}


#reset{
    background-color: white;
    border: 1px solid;
    color: black;


    &:hover{
        background-color: black;
        color:white;
        border : 1px solid white;
        transition: 0.3s background ease-in;
    }
}

#show{
    &:hover{
        background-color: white;
        color:black;
        border : 1px solid black;
        transition: 0.3s background ease-in;
    }
}

div{
    width: 794px;
    height: 208px;
}



`;


