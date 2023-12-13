import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

export const HomeContainer = styled.div`
    padding-top: 3.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
   
    @media (max-width:700px) {
        padding-top: 4rem;
    }
`   

export const ImageContainer = styled.div` 
  transition: all ease-in 1s;
  width:90vw;
  height: 88vh;
  display: flex;
  justify-content: start;
  align-items: center;
  padding-left: 0rem;
  margin-top:1rem;
  border-radius:  24% 76% 66% 34% / 37% 59% 41% 63%  ;

    @media (min-width:1000px) {
                &:hover{
                border-radius: 70% 30% 43% 57% / 69% 16% 84% 31% ;
                padding-left: 10rem;        
            }
        }
        
    @media (max-width:700px) {
        border: 2px solid rgb(251 191 36);
        justify-content: center;
        height: 68vh;
        margin-bottom: 20vh;
        margin-top: 5vh;
        border-radius:33% 67% 42% 58% / 24% 42% 58% 76%    ;
        &:hover{
        border-radius: 41% 59% 80% 25% / 68% 65% 35% 32%  ;
        /* padding-bottom: 10rem;         */
        }
    } 
    
    
`   
export const DiscoverContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 13rem;
  margin-left: 3rem;
  font-size:10rem;
  font-weight:900;
  font-style: italic;
  text-transform: uppercase;
  /* backdrop-filter: blur(10px); */
  height:10rem;
  color:rgb(251 191 36);
  transition: all ease-in 0.5s;

  @media (max-width:1000px) {
    
  }
  @media (max-width:700px) {
  /* border: 2px solid; */
  border-radius: 10px;
  margin-bottom: -80vh;
  padding: 10px;
  height: 6rem;
  /* backdrop-filter: blur(20px); */
  margin-left:0px;
  font-size:3.8rem;
  font-weight:900;

  }
  &:hover{
    color:darkorange;
    /* margin-left: 5rem; */
  }
`
export const DescripitonHome = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: x-large;
  width:100vw;
  padding: 5px;
`
export const GalleryContainer = styled.div`
 z-index: 0;
`

export const ParagraphContainer = styled.div`
  display:flex;
  align-items: center;
  justify-content: space-around;
  width: 100vw;
  padding:1rem;
  @media (max-width:700px) {
    flex-direction: column;
    font-size: large;
  }
`
export const ImageParagraphContainer = styled(Image)`
  display:flex;
  width: 30rem;
  height: 20rem;
  justify-content: space-around;
  border-radius: 70% 30% 43% 57% / 69% 16% 84% 31% ;
  margin: 1rem;
`