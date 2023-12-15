import React from 'react'
import styled from 'styled-components'

export const WaveStyle = styled.div`
  /* display: flex;
  flex-direction: row;
  width: 40vh;
  height: 3vh;
  background-color: black;
  border-radius: 50px; */
    display: block;
    position: relative;
    height:2vh;
    width:40vh;
    background:black;
    transform: scale(1, 1);

  &::before{
    content: "";
    display: block;
    position: absolute;
    border-radius: 100%;
    width: 100%;
    height: 300px;
    background-color: white;
    right: -25%;
    top: 20px  
  }

  &::after{
    content: "";
    display: block;
    position: absolute;
    border-radius: 100%;
    width: 100%;
    height: 300px;
    background-color:red;
    left: -10%;
    top: -274px;
    clip-path: ellipse(100% 15% at -15% 100%);
  }
 
`


function WaveLine() {
  return (
    <div className=' overflow-hidden h-[3vh] m-0 p-0 '> 

    <WaveStyle/>
   
    </div>
  )
}

export default WaveLine
