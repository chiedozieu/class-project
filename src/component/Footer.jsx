import React from 'react'
import bg from '../images/bgfooter.png'
import '../css/footer.css'
import { PiFacebookLogo } from "react-icons/pi";
import { RiTwitterXFill } from "react-icons/ri";
import { FaSquareInstagram } from "react-icons/fa6";
import { GrLinkedin } from "react-icons/gr";
import { FaWhatsappSquare } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
import { TfiEmail } from "react-icons/tfi";


const Footer = () => {
  return (
    <div>
       <div className='mt-5' style={{backgroundImage: `url(${bg})`}}>
                <div className='d-flex justify-content-around '>
                    <div className="footer-info">
                        <h2>KNOW US</h2>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Feedback</a></li>
                            <li><a href="#">FAQs</a></li>
                            <li><a href="#">News & Events</a></li>
                        </ul>
                    </div>
                    
                    <div className="footer-info">
                        <h2>POLICIES</h2>
                        <ul>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Return Policy</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Service and Warranty</a></li>
                        </ul>
                    </div>
                    <div className="footer-info">
                            <h2>GET IN TOUCH</h2>
                            <p>N0 4 Bimpe Lagbaja Street, Onoja lagos State.</p>
                        <ul>
                            <li><a href="#"><span className='footer-icons phone'><BiSolidPhoneCall /></span> +234 773 773 2222</a></li>
                            <li><a href="#"><span className='footer-icons whatsapp'><FaWhatsappSquare /></span> +234 773 773 2223</a></li>
                            <li><a href="#"><span className='footer-icons facebook'><PiFacebookLogo /></span> @ojsounds</a></li>
                            <li><a href="#"><span className='footer-icons x'><RiTwitterXFill /></span> @ojsounds</a></li>
                            <li><a href="#"><span className='footer-icons instagram'><FaSquareInstagram /></span> @ojsounds</a></li>
                            <li><a href="#"><span className='footer-icons linkedin'><GrLinkedin /></span> @ojsounds</a></li>
                          
                        </ul>
                    </div>
                </div>
           
          
           
         
            <div id="footer-bottom" className='d-flex justify-around'>
                <p>Copyright © 2023 New Horizon All rights reserved.</p>
                <a href="mailto: support@ojsounds.com"><span className='footer-icons email'><TfiEmail />&nbsp;&nbsp;&nbsp;</span>support@ojsounds.com</a>
            </div>
        </div>
    </div>
  )
}

export default Footer;