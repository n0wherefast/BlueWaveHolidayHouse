import styled from "styled-components";
import { Props } from "./Navbar.style";


export const AboutContainer = styled.div`
    padding-top:5rem ;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`

export const CardContainer = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 34rem;

    @media (max-width:700px) {
        flex-direction: column;
    }
`
export const CardCollapse =styled.button`
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem;
width:20rem;
height: 3rem;
border-bottom:2px yellow solid ;
&:hover{
    border-bottom: 2px #0284c7 solid;
}

`
export const ButtonCollapse =styled.div<Props>`
    transition: all 1s ease;
  transform:${(props)=>(props.$extend ==='true'? "rotate(-90deg)": "rotate(0deg)")} ;
`
export const CardAbout = styled.div<Props>`
    transition: all 1s ease;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    flex-direction: row;
    padding:${(props)=>(props.$extend === 'true' ? '1rem': '')};
    /* margin: 1rem; */
    width:20rem;
    height:${(props)=>(props.$extend ==='true'? '30rem': '0px')};
    background-color:#0284c7;
    /* border-radius: 10px; */
    /* border: 1px solid darkgray; */
    border-bottom:${(props)=>(props.$extend === 'true'? '2px solid black' :'')} ;
    color: white;
    font-size: larger;
    font-weight: 700;
    font-family: sans-serif;
`


// flex justify-center items-center p-4 m-3 w-2/2 h-auto shadow-xl
//  shadow-slate-400 bg-slate-100 rounded-xl border border-slate-400