import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'


const Container = styled.div`
    height:30px;
    background-color:#242F9B;
    color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:14px;
    font-weight:500;
    ${mobile({height : "40px"})}
`

 const Announcement = () => {
  return (
    <Container>
        Free Shipping over $100 and Flat 30% off on new arrivals.
    </Container>
  )
}


export default Announcement;