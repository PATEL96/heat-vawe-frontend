import React from "react";
import './ProductsListed.css';
import Listing from './Listing'

export default function ProductsListed() {
	return(
		<div className="ProductsListed">
			<Listing/>
			<Listing/>
			<Listing/>
		</div>
	);
}