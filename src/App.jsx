import styled from "styled-components"
import StartGame from "./components/StartGame";
import { useEffect, useState } from "react";
import MainGame from "./components/MainGame";
const Button = styled.button`
  background-color:black;
  color:white;
  padding:10px;`;

function App() {

  const [isGameStarted,setIsGameStarted] = useState(false);

  function toggleGame()
  {
    console.log("Toggle Changed");
    setIsGameStarted(!isGameStarted);
  }
  
  

  return (
    <div>
      {isGameStarted ? <MainGame /> : <StartGame toggle={toggleGame}/>}

    </div>
  )
}

export default App
