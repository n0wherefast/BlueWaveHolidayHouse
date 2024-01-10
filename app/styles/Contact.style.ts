
import styled from "styled-components";

interface Props{
    top:string,
    left:string,
}

export const BoxInfo = styled.div<Props>`
    width: 30vw;
    /* height: 25vh; */
    padding: 0.5rem;
    margin: 0.5rem;
    background-color: rgb(2 132 199);
    color: rgb(250 250 250);
    /* border: 2px solid #94a3b8; */
    /* background-color: rgb(3, 139, 166); */
    z-index: 10;
    /* position: absolute;
    top: ${props=> (props.top)};
    left: ${props=> (props.left)}; */
    /* border-radius: 20px ; */

    @media (max-width:700px) {
        width: 100vw;
    /* left: 1rem;
    top:83rem; */
    }

`
export const LinkInfo = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
`