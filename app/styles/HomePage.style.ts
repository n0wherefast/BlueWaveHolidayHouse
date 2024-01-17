import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";



export const HomeContainer = styled.div`
    padding-top:4rem; 
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width:700px) {
        padding-top: 4.8rem;
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
 height: 100vh;
 z-index: 0;
 backdrop-filter: blur(20px);
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