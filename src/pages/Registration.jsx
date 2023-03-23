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
    background-color: #0b0d1b;
    ${mobile({ width: "75%" })}`

const Title=styled.h1`
    font-size:24px;
    font-weight:500;
    color:#72c4d9;
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
        background-color:#0b0d1b;
        border:1px solid #714c93;
        color:white;
        ::placeholder,
        ::-webkit-input-placeholder {
          color: #f7d400;
        }
        :-ms-input-placeholder {
          color: #f7d400;
        }

`

const Agreement=styled.span`
    font-size:12px;
    margin:20px 0;
`

const Button=styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color:#714c93;
    color:#f7d400;
    cursor: pointer;
    &:hover{
      color:#714c93;
      background-color:#f7d400;
      transition:ease-in 0.5s
      }
`

const Registration = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Regestration</Title>
            <Form>
                <Input placeholder="First Name"/>
                <Input placeholder="Last Name"/>
                <Input placeholder="Phone Number"/>
                <Input placeholder="Email"/>
                <Input type="password" placeholder="Password"/>
                <Input type="password" placeholder="Confirm password"/>
                <Agreement>By creating account i understand all the terms and conditis of the <b>Privicy Policy</b></Agreement>
                <Button><b>Create Account</b></Button>
            </Form>
        </Wrapper>
    </Container>
  )
}
export default Registration;