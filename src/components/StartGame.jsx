import styled from "styled-components";

function StartGame({toggle})
{
    return <div>
        <Container>
            <div>
            <img src="/drawable/dices.png"></img>
            </div>
            <div className="content">
                <h1>DICE GAME</h1>
                <Button onClick={toggle}> Play Now</Button>
            </div>
        </Container>
    </div>
}




export default StartGame;


const Container = styled.div`
    max-width:100%;
    display: flex;
    margin-top: 180px;
    height: 522px;
    align-items: center;
    justify-content: center;
    
    
    
    
    .content {
        
        h1{
            margin: 0 auto;
            font-weight: 700;
            font-size: 96px;
            white-space: nowrap;
        }
    }
`;




const Button = styled.button`
background-color: black;
color: white;
border-radius: 5px;
padding: 10px;
border: 0cap;
width: 220px;
transition: 0.3s background ease-in;
border: 1px solid transparent;
cursor: pointer;


&:hover{
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: 0.3s background ease-in;
}

`;






