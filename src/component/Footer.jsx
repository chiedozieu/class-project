import React from 'react'
import bg from '../images/bgfooter.png'
import '../css/footer.css'

const Footer = () => {
  return (
    <div>
       <div className='mt-4' style={{backgroundImage: `url(${bg})`
}} >
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
                            <li>+234 773 773 2222</li>
                            <li>+234 773 773 2223</li>
                            <li>@ojsounds</li>
                            <li>@ojsounds</li>
                            <li>@ojsounds</li>
                            <li>@ojsounds</li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
           
          
           
         
            <div id="footer-bottom">
                <p>Copyright © 2023 New Horizon All rights reserved.</p>
                <a href="mailto: support@ojsounds.com">support@ojsounds.com</a>
            </div>
        </div>
    </div>
  )
}

export default Footer;