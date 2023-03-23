import {React} from 'react'
import styled from 'styled-components';
import  Footer  from '../components/Footer'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import ProductsListed from '../components/ProductsListed'
import Catagories from '../components/Catagories'
import {mobile} from '../responsive';

const Text=styled.h1`
    text-align:center;

`
const HR=styled.hr`
    width:10%;
    text-align:center;
	margin:0 auto;
    border: 0;
  	border-top: 1px solid #efb903;
	
      
    `

export default function Home() {
	return(
		<div>
			<Navbar/>
			<Carousel/>
			{/* <Listing/> */}
			<Text>Categories<HR/></Text>
			<Catagories/>
			<Text>Products<HR/></Text>
			<ProductsListed/>
			<Footer/>
		</div>
	);
}