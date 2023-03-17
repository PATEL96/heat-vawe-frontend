import React from "react";
import { useState } from "react";
import './Navbar.css';
import logoImg from '../images/logo.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
	const[navbar, setNavbar] = useState(false);
	const[navContent, setNavConent] = useState(false);
	const [isMobile, setIsMobile] = useState(true);

	var viewport_height = window.innerHeight;

	const changeNav = () => {
		if(window.scrollY >= (viewport_height*0.04)){
			setNavbar(true);
			setNavConent(true);
		} else {
			setNavbar(false);
			setNavConent(false);
		}
	}

	window.addEventListener('scroll', changeNav);

	return(
		<div className={navbar ? 'nav-main active' : 'nav-main'}>
			<div className={navContent ? 'navContent active' : 'navContent'}>
				<div className="leftSide">
					<img src={logoImg} alt="Heat_Vawe" className="Logo" />
					<div className={isMobile ? 'list-desktop' : 'list-mobile'} onClick={() => setIsMobile(true)} >
						<div className="home">
							<Link to="/">Home</Link>
							<hr color="none" />
						</div>
						<div className="over">
						<Link to="/">Oversized T-Shirts</Link>
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
					<button className="mobile-menu" onClick={() => setIsMobile(!isMobile)}>
						{isMobile ? (<i className="fa-solid fa-bars" />) : (<i className="fa-solid fa-times" />)}
					</button>
				</div>
			</div>
		</div>
	);
}