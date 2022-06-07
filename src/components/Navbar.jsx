import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
import {Search, ShoppingCartOutlined} from '@mui/icons-material'
import { Badge } from '@mui/material'


const Container = styled.div`
    height:60px;
    ${mobile({height : "50px"})}
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    ${mobile({padding : "10px 0px"})}
`
const Left = styled.div`
    flex:1;
`
const Logo =styled.h1`
    font-weight:bold;
    ${mobile({fontSize : "24px", marginLeft:"5px"})}
`
const Center = styled.div`
    flex:2;
    display:flex;
    align-items:center;
    font-size:26px;
    ${mobile({display : "none"})}
`

const Right = styled.div`
    flex:1;
    display:flex;
    align-items:center;
    text-decoration:none;
    ${mobile({ flex:3, justifyContent : "center", paddingRight:"7px"})}
`
const Language = styled.span`
    font-size:14px;
    cursor:pointer;
    ${mobile({display : "none"})}
`

const SearchContainer = styled.div`
    border: 0.5px solid lightgray; 
    display:flex;
    align-items:center;
    margin-left:7px;   
`

const Input = styled.input`
    border:none;
    ${mobile({width : "60px"})}
`

const MenuItem = styled.div`
    font-size:14px;
    cursor:pointer;
    padding: 0px 7px;
    ${mobile({fontSize : "12px", marginLeft :"12px"})};
    
`


const Navbar = () => {
  return (
    <div>
        <Container>
            <Wrapper>
                <Left>
                    <Logo>LOGO</Logo>
                </Left>
                <Center>
                   SHOP
                </Center>
                <Right>
                    <Language>EN</Language>
                    <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>    
        <MenuItem><a href="http://localhost:3000/register">REGISTER</a></MenuItem>
        <MenuItem><a href="http://localhost:3000/login">SIGN-IN</a></MenuItem>
        <MenuItem>
       <a href="http://localhost:3000/cart">     <Badge badgeContent={4} color="primary">
            <ShoppingCartOutlined />
            </Badge>
            </a>
        </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    </div>
  )
}

export default Navbar