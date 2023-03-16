import {React,useState} from 'react'
import styled from 'styled-components'
import {mobile} from '../responsive';
// import {useDispatch,useSelector} from 'react-redux';
// import { login } from "../redux/apiCalls";
// import { Link } from 'react-router-dom';

const Container=styled.div`
    width:100vw;
    height:100vh;
    background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('${''}')
      center;
    background-size: cover;
    align-items:center;
    justify-content:center;
    display:flex;
    color: white;
`

const Wrapper=styled.div`
    width:25%;
    padding:20px;
    background-color: #0b0d1b;
    color: white;
    ${mobile({ width: "75%" })}
    `

const Title=styled.h1`
    color:#72c4d9;
    font-size:24px;
    font-weight:300;
   
`

const Form=styled.form`
    display:flex;
    flex-direction: column;
`
const Input=styled.input`
        flex:1;
        min-width:40%;
        margin:10px 0;
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
const Error=styled.span`
  color:red`

const Button=styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color:#714c93;
    color:#f7d400;
    cursor: pointer;
    ${'' /* &:disabled{
      color:green;
      cursor:not-allowed;
    } */}
    &:hover{
      color:#714c93;
      background-color:#f7d400;
      transition:ease-in 0.5s
`
const Anchor=styled.a`
    color: #d23b8c;
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`

const Login = () => {
  // const [number,setNumber]=useState("")
  // const [password,setPassword]=useState("")
  // const dispatch=useDispatch()
  // const {isFetching,error}=useSelector(state=>state.user)

  // const handleClick=(e)=>
  // {
  //   e.preventDefault()
  //   login(dispatch,{
  //     number,
  //     password
  //   })
  // }

  return (
    <Container>
        <Wrapper>
            <Title>Login</Title>
            <Form>
                <Input placeholder="Number" onChange={'(e)=>{setNumber(`${e.target.value}`)}'}/>
                <Input type="password" placeholder="password" onChange={'(e)=>{setPassword(`${e.target.value}`)}'}/>
                <Button onClick={'handleClick'} disabled={'isFetching'}>Sign In</Button>
                {/* {error && <Error>Some thing went wrong</Error>} */}
                <Anchor> DO NOT REMEMBER THE PASSWORD?</Anchor>
                {/* <Link to="/register"> */}
                  <Anchor>CREATE A NEW ACCOUNT</Anchor>
                {/* </Link> */}
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login