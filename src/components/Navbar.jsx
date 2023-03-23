import React from "react";
import { useState } from "react";
import './Navbar.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import logoImg from '../images/logo.png';

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
					<button className="mobile-menu" onClick={() => setIsMobile(!isMobile)}>
						{isMobile ? (<MenuIcon />) : (<CloseIcon />)}
					</button>
				</div>
				<div className="rightSide">
					<div className="quickActions">
						<ShoppingCartIcon className="cart" />
						<AccountCircleIcon className="account" />
					</div>
				</div>
			</div>
		</div>
	);
}