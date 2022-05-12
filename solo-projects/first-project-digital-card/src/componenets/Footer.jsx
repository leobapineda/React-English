import React from "react"
import twitter from '../images/logo-twitter.svg'
import github from '../images/logo-github.svg'
import facebook from '../images/logo-facebook.svg'
import linkedin from '../images/logo-linkedin.svg'
// stylesheet
import '../stylesheet/Footer.css'
export default function Footer() {
    return(
        <div className="footer-container">
            <a href="#"><img src={github} alt="github logo" /></a>
            <a href="#"><img src={linkedin} alt="linkedin logo" /></a>
            <a href="#"><img src={twitter} alt="twitter logo" /></a>
            <a href="#"><img src={facebook} alt="facebook logo" /></a>
        </div>
        
    )
}