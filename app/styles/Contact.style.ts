
import styled from "styled-components";

interface Props{
    top?:string,
    left?:string,
}

export const BoxInfo = styled.div<Props>`
    width: 30vw;
    height: 23vh;
    padding: 0.5rem;
    margin: 0.5rem;
    background-color: rgb(2 132 199);
    color: rgb(250 250 250);
    z-index: 10;
    
    @media (max-width:1024px){
        width: 38vw;
        height: 18vh;
    }

    @media (max-width:700px) {
        width: 100vw;
        height: auto;
        /* margin:1rem; */
    
    /* left: 1rem;
    top:83rem; */
    }

`
export const LinkInfo = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
`