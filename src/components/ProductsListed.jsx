import React from "react";
import './ProductsListed.css';
import Listing from './Listing'
import {Products} from "../Data"
import {RecentProducts} from "../Data"
import { useLocation } from "react-router";

export default function ProductsListed() {
	const location=useLocation();
	const category=location.pathname.split("/")[2]
	return(
		<div className="ProductsListed">
		{(category?Products:RecentProducts).map(element=>{
                    return (
						<Listing element={element}/>)
                })}

		</div>
	);
}