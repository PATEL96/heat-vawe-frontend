import React from "react";
import './Navbar.css';
import logo from '../images/logo.png';

export default function Navbar() {
	return(
		<div className="nav-main">
			<div className="navContent">
				<img src={logo} alt="Heat_Vawe" className="Logo" />
				<div className="options" >
					<ul>
						<li>
							Home
						</li>
						<li>
							T-Shirts
						</li>
						<li>
							About
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}