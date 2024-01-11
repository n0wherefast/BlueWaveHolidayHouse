import styled from "styled-components";

export const BgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color:#f7eda7; */
  width: 100vw;
  height: 93.5vh;
`

export const ImgContainer = styled.div`
 width: 100vw;
 height: 90vh;
`

export const DiscoverContainer = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* margin-top: 8rem; */
    margin-bottom: 25rem;
    margin-left: 20rem;
    font-size:10rem;
    font-weight:900;
    font-style: italic;
    text-transform: uppercase;
    /* backdrop-filter: blur(10px); */
    height:10rem;
    color:rgb(251 191 36);
    transition: all ease-in 0.5s;
    z-index: 10;

    @media (max-width:1000px) {
      position: absolute;
      top:35rem;
      font-size: 8rem;
      /* padding-top: 40rem; */
      margin-left: 1rem;
    }
    @media (max-width:700px) {
        position: absolute;
        top: -12rem;
        /* border-radius: 10px; */
        margin-top: 45rem;
        /* margin-bottom:5rem; */
        padding: 10px;
        height: 10rem;
        /* backdrop-filter: blur(20px); */
        margin-left:0px;
        font-size:3.5rem;
        font-weight:900;
    }
  &:hover{
    color:darkorange;
    /* margin-left: 5rem; */
  }
`

export const ImageContainer = styled.div` 
position: absolute;
  transition: all ease-in 1s;
  width:100%;
  height: 93vh;
  padding-left: 0rem;
  margin-top:1rem;
  /* border-radius:  24% 76% 66% 34% / 37% 59% 41% 63%  ; */

    @media (min-width:1000px) {
                /* &:hover{
                border-radius: 70% 30% 43% 57% / 69% 16% 84% 31% ;
                padding-left: 10rem;        
            } */
        }
        
    @media (max-width:700px) {
        /* border: 2px solid rgb(251 191 36); */
        justify-content: center;
        height: 100vh;
        width: 100%;
        margin-bottom: 20vh;
        margin-top: 10vh;
        /* border-radius:33% 67% 42% 58% / 24% 42% 58% 76%    ; */
        &:hover{
        /* border-radius: 41% 59% 80% 25% / 68% 65% 35% 32%  ; */
        /* padding-bottom: 10rem;     */
        }
    } 
`   