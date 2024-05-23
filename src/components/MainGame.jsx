import styled from "styled-components";
import Score from "./Score";
import SelectNumber from './SelectNumber'
import RollDice from "./RollDice";
import { useState } from "react";
import Warning from "./Warning";



function MainGame()
{
    const [currentDice,setCurrentDice] = useState(1);
    const [selectedNumber,setSelectedNumber] = useState();
    const [score,setScore]=useState(0);
    const [showWarning,setShowWarning]=useState(false);
    





    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    function random()
    {
        if(selectedNumber)
        {
            const number = randomNumber(1,7);
            console.log(number);
            setCurrentDice(number);
            setShowWarning(false);

            if(selectedNumber===number)
            {
                setScore((prev)=> prev+number);
            }
            else setScore((prev)=> prev-2);
        }
        else 
        {
            setShowWarning(!showWarning);
        }

        
    }




    return <div>
        <Warn>{showWarning?<Warning/>:<div></div>}</Warn>
        <Nav>
            <Score score = {score}/>
            <SelectNumber selectedNumber={selectedNumber}  setSelectedNumber={setSelectedNumber} />
        </Nav>

        <RollDice currentDice={currentDice} random = {random} setScore={setScore}/>

    </div>
}

export default MainGame;

const Nav = styled.div`
display: flex;
align-items: center;
justify-content:space-between;
margin-top:40px`;


const Warn = styled.div`
width:100%;
height:36px;
display: flex;
justify-content: end;
margin-top:28px`;