import React from "react";
import './Navbar.css';
import logo from '../images/logo.png';

export default function Navbar() {
	return(
		<div className="nav-main">
			<div>
				<img src={logo} alt="Heat_Vawe" className="Logo" />
			</div>
		</div>
	);
}