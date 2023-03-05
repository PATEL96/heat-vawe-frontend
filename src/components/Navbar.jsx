import React from "react";
import { useState } from "react";
import './Navbar.css';
import logoImg from '../images/logo.png';

export default function Navbar() {
	const[navbar, setNavbar] = useState(false);
	const[navContent, setNavContent] = useState(false);

	var viewport_height = window.innerHeight;

	const changeNav = () => {
		if(window.scrollY >= (viewport_height*0.1)){
			setNavbar(true);
			setNavContent(true);
		} else {
			setNavbar(false);
			setNavContent(false);
		}
	}

	window.addEventListener('scroll', changeNav);

	return(
		<div className={navbar ? 'nav-main active' : 'nav-main'}>
			<div className={navContent ? 'navContent active' : 'navContent'}>
				<div className="leftSide">
					<img src={logoImg} alt="Heat_Vawe" className="Logo" />
					<div className="home">
						Home
						<hr color="none" />
					</div>
					<div className="over">
						Oversized T-Shirts
						<hr color="none" />
					</div>
					<div className="collection">
						{/* // Todo: make list Here */}
						Collections
						<hr color="none" />
					</div>
					<div className="about">
						About
						<hr color="none" />
					</div>
				</div>
			</div>
		</div>
	);
}