import React from "react";
import { useState } from "react";
import './Navbar.css';
import logo from '../images/logo.png';

export default function Navbar() {
	const[navbar, setNavbar] = useState(false);

	var viewport_height = window.innerHeight;

	const changeNav = () => {
		if(window.scrollY >= (viewport_height*0.1)){
			setNavbar(true);
		} else {
			setNavbar(false);
		}
	}

	window.addEventListener('scroll', changeNav);

	return(
		<div className={navbar ? 'nav-main active' : 'nav-main'}>
			<div className="navContent">
				<img src={logo} alt="Heat_Vawe" className="Logo" />
				<div className="options" >
					<div>Home</div>
					<div>T-Shirts</div>
					<div>About</div>
				</div>
			</div>
		</div>
	);
}