import styled from "styled-components";
import Image from "next/image";

export const BgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color:#f7eda7; */
  width: 100vw;
  min-height: 100vh;
  @media(max-width:700px){
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
  }
`



export const DiscoverContainer = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 25rem;
    margin-left: 20rem;
    font-size:10rem;
    font-weight:900;
    font-style: italic;
    text-transform: uppercase;
    height:10rem;
    color: rgb(251 191 36);
    transition: all ease-in 0.5s;
    z-index: 10;

    @media (max-width:1000px) {
      /* position: absolute;
      top:35rem; */
      font-size: 8rem;
      margin-left: 1rem;
    }
    @media (max-width:700px) {
        margin-bottom: 1rem;
        min-height: 8rem;
        margin-left:0px;
        font-size:3.5rem;
        font-weight:900;
    }
  &:hover{
    color:darkorange;
  }
`

export const ImageContainer = styled(Image)` 
position: absolute;
  transition: all ease-in 1s;
  width:100%;
  height: 93vh;
  padding-left: 0rem;
  margin-top:1rem;
object-fit: cover;
object-position: 0px -15rem;


    @media (max-width:700px) {
        justify-content: center;
        height: 100vh;
        width: 100%;
        margin-bottom: 20vh;
        margin-top: 10vh;
        object-position: center 3rem;
        
    } 
`   