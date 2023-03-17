import {React} from 'react'
import  Footer  from '../components/Footer'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import Listing from '../components/Listing'
import {mobile} from '../responsive';

export default function Home() {
	return(
		<div>
			<Navbar/>
			<Carousel/>
			<Listing/>
			<Footer/>
		</div>
	);
}