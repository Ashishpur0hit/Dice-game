import React from "react";
import styled from "styled-components";

const Warning = React.memo(function Warning()
{
    return <Box>
        You have not selected any number
    </Box>
});

export default Warning;


const Box = styled.div`
color:red`;