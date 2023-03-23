import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import photo from '../images/photo.jpg'
import {mobile} from '../responsive';


const Container=styled.div`
    flex:1;
    margin:3px;
    height:70vh;
    position:relative;`

const Image=styled.img`
    width:100%;
    height:100%;
    opacity:0.4;
    object-fit:cover;
    ${mobile({ height: "30vh" })}
  ` 

const Info=styled.div`
    position:absolute;
    width:100%;
    height:100%;
    top:0;
    left:0;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center`

const Title=styled.h1`
    color: rgb(114, 196, 217);
    margin-bottom:28px`

const Button=styled.button`
        border:none;
        padding:10px;
        font-weight: 600;
        background-color:#714c93;
        border:5px solid #714c93;
        color:#f7d400;
      &:hover{
        color:#714c93;
        background-color:#f7d400;
        border:5px solid #f7d400;
        
        text-shadow: 2.5px;
        transition:all 0.5s ease ;
      }
      `



const CatagorieItem = (props) => {
  return (
    <Container>
    <Link to={`/products/oversized`}>
        <Image src={photo}/>
        <Info>
            <Title>{props.NAme}</Title>
            <Button>Comming Soon</Button>
        </Info>
        {/* 
          <Container>
    <Link to={`/products/${item.cat}`}>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>{item.avalibe?"Shop":"Comming soon"}</Button>
        </Info> */}
    </Link>
    </Container>
  )
}

export default CatagorieItem