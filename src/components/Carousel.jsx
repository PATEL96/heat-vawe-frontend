import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as ReactCarousel } from "react-responsive-carousel";
import './Carousel.css';

const slides = [
	{
		image: "https://c4.wallpaperflare.com/wallpaper/764/505/66/baby-groot-4k-hd-superheroes-wallpaper-preview.jpg",
	},{
		image: "https://c4.wallpaperflare.com/wallpaper/764/505/66/baby-groot-4k-hd-superheroes-wallpaper-preview.jpg",
	},{
		image: "https://c4.wallpaperflare.com/wallpaper/764/505/66/baby-groot-4k-hd-superheroes-wallpaper-preview.jpg",
	},{
		image: "https://c4.wallpaperflare.com/wallpaper/764/505/66/baby-groot-4k-hd-superheroes-wallpaper-preview.jpg",
	},
]

export default function Carousel() {
	return(
		<div>
			<ReactCarousel
				showArrows = {false}
				showStatus = {false}
				showThumbs = {false}
				autoPlay = {1500}
				stopOnHover = {false}
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