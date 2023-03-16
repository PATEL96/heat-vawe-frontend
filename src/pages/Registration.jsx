import React from 'react'
import styled from 'styled-components'
import {mobile} from '../responsive';
// import top_2 from "../images/top_2.jpeg"

const Container=styled.div`
    width:100vw;
    height:100vh;
    background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('')
      center;
    align-items:center;
    justify-content:center;
    display:flex;
`

const Wrapper=styled.div`
    width:40%;
    padding:20px;
    background-Color:white;
    ${mobile({ width: "75%" })}`

const Title=styled.h1`
    font-size:24px;
    font-weight:500;
`


const Form=styled.form`
    display:flex;
    flex-wrap: wrap;
`
const Input=styled.input`
        flex:1;
        min-width:40%;
        margin:20px 10px 0 0;
        padding:10px;
`

const Agreement=styled.span`
    font-size:12px;
    margin:20px 0;
`

const Button=styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`

const Registration = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Regestration</Title>
            <Form>
                <Input placeholder="name"/>
                <Input placeholder="last name"/>
                <Input placeholder="email"/>
                <Input placeholder="username"/>
                <Input placeholder="password"/>
                <Input placeholder="confirm password"/>
                <Agreement>By creating account i understand all the terms and conditis of the <b>Privicy Policy</b></Agreement>
                <Button>Create</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Registration