import styled, { keyframes } from 'styled-components';

const spinny = keyframes`
  from {
    transform: rotate(0deg)
    width: 100px;
    border: 6px green solid;
  }

  to {
    transform: rotate(360deg)
    width: 300px;
    border: 6px red solid;
  }
`


export const HomeImg = styled.img`
  width: 200px;
  animation: ${spinny} 4s linear infinite
`