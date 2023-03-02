
import {React,useState} from "react";
import Logo from '../images/logo.png';
import './Footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';

const SubmitFormHandler=(e)=>{
    e.preventDefault();

}


const Footer=()=>{
    const [Email, setEmail] = useState("");
    console.log(Email);

    

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
                                <li className="FooterListItem">Cart</li>
                                <li className="FooterListItem">Launch Series</li>
                                <li className="FooterListItem">Track order</li>
                                <li className="FooterListItem">Bulk or Custom orders</li>
                            </ul>
                        </div>
                        <div className="ThreeRow RROOWW">
                        <h5 className="FooterHeadings">Boring Stuff</h5>
                            <ul className="FooterList">
                                <li className="FooterListItem">Terms & Conditions</li>
                                <li className="FooterListItem">Privicy Policy</li>
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
                                <img className="logoImg" src={Logo} alt="Heat_Vawe"/>
                        </div>
                        <div className="social RROOWW">
                                <InstagramIcon/>
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