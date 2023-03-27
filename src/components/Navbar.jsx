import React from "react";
import { useState } from "react";
import './Navbar.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import logoImg from '../images/logo.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
	const[navbar, setNavbar] = useState(false);
	const[navContent, setNavConent] = useState(false);
	const [isMobile, setIsMobile] = useState(true);
	const [isUp, setIsUp] = useState(false);

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
					<Link to="/">
						<img src={logoImg} alt="Heat_Vawe" className="Logo" />
					</Link>
					<div className={isMobile ? 'list-desktop' : 'list-mobile'} >
						<div className="home" >
							<Link to="/" className="links" onClick={() => setIsMobile(true)}>Home</Link>
							<hr color="none" />
						</div>
						<div className="over">
							<Link to="/products/OversizedT-shirts" className="links">Oversized T-Shirts</Link>
							<hr color="none" />
						</div>
						<div className="collection" onClick={() => setIsUp(!isUp)}>
							{/* <Link to="/" className="links"> */}
							<div className="coll-span">
								Collections
								<button>
									{isUp ? (<KeyboardArrowUpIcon />) : (<KeyboardArrowDownIcon />)}
								</button>
							</div>
							<hr color="none" />
							<div className={isUp ? 'coll-menu active' : 'coll-menu'}>
								<div className="coll-item" onClick={() => setIsMobile(true)}>
									Launch Series
								</div>
								<hr />
								<div className="coll-item" onClick={() => setIsMobile(true)}>
									Rap Series
								</div>
							</div>

								{/* // Todo: make list Here */}
							{/* </Link> */}
						</div>
						<div className="about">
							<Link to="/" className="links" onClick={() => setIsMobile(true)}>
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