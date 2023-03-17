import {useState,React} from 'react';
import photo from '../images/photo.jpg'
import './Listing.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function likeHandler(){
    console.log("like recorded")
}

const MouseIn=()=>{
    return (
        <div className='productPrice'>
                    <div className='price'><span >₹550</span></div>
                    <div className='discountPrice'><span >25%</span></div>
        </div>
    )
}

export default function Listing() {
    const [mouseIn, setmoiseIn] = useState(false)
	return(
		<div className="List-main" onMouseLeave={()=>{setmoiseIn(false)}} onMouseEnter={()=>{setmoiseIn(true)}}>
			<div className='image' >
                    <img alt="japneese" src={photo} className='productImage'/>
            </div>
            <div className='productDetails'>
                <div className='productName'>
                    <h4 className='Name'>Japneese</h4>
                    <span className='like'><FavoriteBorderIcon onClick={likeHandler}/></span>
                </div>
                {mouseIn&&<MouseIn/>}
            </div>
		</div>
	);
}