import {React,useState} from "react";
import logo from '../images/logo.png';
import './Footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';

const SubmitFormHandler=(e)=>{
    e.preventDefault();

}


const Footer=()=>{
    const [Email, setEmail] = useState("");
    // console.log(Email);

    

    return (
            <div className="Container">
                <footer className="Footer">
                    <hr className="SecondaryHR" />
                    <div className="Wrapper">
                        <div className="OneRow RROOWW">
                            <h5 className="FooterHeadings">Become a Vawer</h5>
                            <ul className="FooterList">
                                <li className="FooterListItem">
                                    <form className="SubForm">
                                        <input placeholder="Enter Email id" onChange={(e)=>{setEmail(e.target.value)}} className="SubInput"/>
                                        <button className="SubSubmitButton" onClick={SubmitFormHandler}>SUBSCRIBE</button>
                                     </form>
                                </li>
                            </ul>
                        </div>
                        <div className="TwoRow RROOWW">
                            <h5 className="FooterHeadings">Good Stuff</h5>
                            <ul className="FooterList">
                                <li className="FooterListItem Pointer"><Link to="/cart">Cart</Link></li>
                                <li className="FooterListItem Pointer"><Link to="/products/LaunchSeries">Launch Series</Link></li>
                                <li className="FooterListItem Pointer"><Link>Track order</Link></li>
                                <li className="FooterListItem Pointer"><Link>Bulk or Custom orders</Link></li>
                            </ul>
                        </div>
                        <div className="ThreeRow RROOWW">
                        <h5 className="FooterHeadings">Boring Stuff</h5>
                            <ul className="FooterList ">
                                <li className="FooterListItem Pointer">Terms & Conditions</li>
                                <li className="FooterListItem Pointer">Privicy Policy</li>
                            </ul>
                        </div>
                        <div className="FourRow RROOWW">
                        <h5 className="FooterHeadings">Contact Us</h5>
                            <ul className="FooterList">
                                <li className="FooterListItem"><h6 style={{fontSize:"13px",Display:"inline"}}>Call: </h6>+91 8146464158</li>
                                <li className="FooterListItem"><h6 style={{fontSize:"13px",Display:"inline"}}>Timming: </h6>8AM-6PM (Mon-Sat)</li>
                                <li className="FooterListItem"><h6 style={{fontSize:"13px",Display:"inline"}}>Enquire: </h6>hello@heatvawe.com</li>
                                <li className="FooterListItem"><h6 style={{fontSize:"13px",Display:"inline"}}>Bulk & Customized Orders: </h6>bulk@heatvawe.com</li>   
                            </ul>
                        </div>
                    </div>
                    <div className="Wrapper2">
                        <div className="Logo RROOWW">
                                <img className="logoImg" src={logo} alt="Heat_Vawe"/>
                        </div>
                        <div className="social RROOWW">
                                <Link to="https://www.instagram.com/heat_vawe/"><InstagramIcon/></Link>
                        </div>

                    </div>
                    <hr className="SecondaryHR"/>
                    <div className="Copyright">
                            <span>©️ Heatvawe 2023. All rights reserved</span>
                    </div>
                </footer>
            </div>
        )
}

export default Footer;