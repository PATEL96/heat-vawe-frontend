import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState } from "react";
import { Carousel as ReactCarousel } from "react-responsive-carousel";
import './Carousel.css';

const slides = [
	{
		image: "https://c4.wallpaperflare.com/wallpaper/764/505/66/baby-groot-4k-hd-superheroes-wallpaper-preview.jpg",
	},{
		image: "https://c4.wallpaperflare.com/wallpaper/295/163/719/anime-anime-boys-picture-in-picture-kimetsu-no-yaiba-kamado-tanjir%C5%8D-hd-wallpaper-preview.jpg",
	},{
		image: "https://c4.wallpaperflare.com/wallpaper/658/800/994/simple-simple-background-minimalism-black-background-wallpaper-preview.jpg",
	},{
		image: "https://c4.wallpaperflare.com/wallpaper/365/244/884/uchiha-itachi-naruto-shippuuden-anbu-silhouette-wallpaper-preview.jpg",
	},
]

export default function Carousel() {

	const[isMobile, setIsMobile] = useState(false);

	var viewport_width = window.innerWidth;

	const changeIsMobile = () => {
		if(viewport_width < 1250){
			setIsMobile(true);
		} else {
			setIsMobile(false);
		}
	}

	window.addEventListener('width', changeIsMobile);

	return(
		<div className={isMobile ? 'car-mobile' : 'car-main'}>
			<ReactCarousel
				showArrows = {false}
				showStatus = {false}
				showThumbs = {false}
				autoPlay = {1500}
				stopOnHover = {false}
				transitionTime = {1200}
				infiniteLoop = {true}

			>
				{slides.map((slides) => (
					<div className="image-wrapper" >
						<img src={slides.image} alt="none" />
					</div>
				))}
			</ReactCarousel>
		</div>
	);
}