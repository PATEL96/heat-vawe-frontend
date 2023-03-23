import React from 'react'
import styled from 'styled-components';
import CatagorieItem from './CatagorieItem';
import {mobile} from '../responsive';

const Container=styled.div`
    display:flex;
    padding:10px;
    justify-content:space-between;
    ${mobile({ padding: "0" , flexDirection:"column"})}
`

const Catagories = () => {
  return (
    <Container>
        <CatagorieItem NAme="Oversized Tshirts"/>
        <CatagorieItem NAme="Jeans"/>
        <CatagorieItem NAme="Caps"/>

      {/* {categories.map((item)=>(
        <CatagorieItem key={item.id} item={item}/>
      ))}   */}
    </Container>
  )
}

export default Catagories