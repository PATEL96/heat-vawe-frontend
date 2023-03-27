import React from "react";
import './ProductsListed.css';
import Listing from './Listing'
import {Products} from "../Data"

export default function ProductsListed() {
	return(
		<div className="ProductsListed">
		{Products.map(element=>{
                    return (
						<Listing element={element}/>)
                })}

		</div>
	);
}