import {React} from 'react'
import  Footer  from '../components/Footer'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import {mobile} from '../responsive';

export default function Home() {
	return(
		<div>
			<Navbar/>
			<Carousel/>
			<Footer/>
			{/* <Listing/> */}
		</div>
	);
}