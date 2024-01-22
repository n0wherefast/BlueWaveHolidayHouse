
import styled from "styled-components";

interface Props{
    top?:string,
    left?:string,
}

export const BoxInfo = styled.div<Props>`
   display: flex;
   flex-direction: column;
    min-width: 30vw;
    min-height: 30vh;
    padding: 0.5rem;
    margin: 0.5rem;
    background-color: rgb(2 132 199);
    color: rgb(250 250 250);
    /* z-index: 10; */
    
    @media (max-width:1024px){
        min-width: 38vw;
        min-height: 18vh;
    }

    @media (max-width:700px){
        width: 98vw;
        min-height: 20rem;
        margin:0px;
    }

`
export const LinkInfo = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: row;
justify-content: space-around;

@media (max-width:700px){
        padding: 1rem;
    }
`