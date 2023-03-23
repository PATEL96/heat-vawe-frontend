import React from "react";
import { useState } from "react";
import './Navbar.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
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
							<Link to="/" className="links">Home</Link>
							<hr color="none" />
						</div>
						<div className="over">
							<Link to="/products/OversizedT-shirts" className="links">Oversized T-Shirts</Link>
							<hr color="none" />
						</div>
						<div className="collection">
							<Link to="/" className="links">
								{/* // Todo: make list Here */}
								Collections
							</Link>
							<hr color="none" />
						</div>
						<div className="about">
							<Link to="/" className="links">
								About
							</Link>
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