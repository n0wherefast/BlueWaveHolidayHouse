import React from 'react'
import styled from 'styled-components'

export const WaveStyle = styled.div`
    display: block;
    position: relative;
    height:50px;
    width:300px;
    transform: scale(1, 1);
    border-radius:10%;
  &::before{
    content: "";
    display: block;
    position: absolute;
    width: 200px;
    height:53px;
    left:122px;
    top: -11px;
    border-radius : 55% 45% 52% 48% / 0% 0% 100% 100% ;
    border-bottom: 5px solid darkcyan;
    /* rotate: 0deg; */
    clip-path:circle(50%);
  }

  &::after{
    content: "";
    display: block;
    position: absolute;
    width: 200px;
    height:53px;
    right:122px;
    bottom: -11px;
    border-radius : 52% 48% 48% 52% / 100% 100% 0% 0%  ;
    border-top: 5px solid darkcyan;
    rotate: -0.5deg;   
    clip-path:circle(50%);
  }
 
`


function WaveLine() {
  return (
    <div className=' overflow-hidden m-0 p-0 '> 
    <WaveStyle/>
    </div>
  )
}

export default WaveLine
