import React from 'react'
import '../sass/Contact.scss'
import ghlogo from '../../images/ghlogo.png'
import lilogo from '../../images/LI-Logo.png'
import twlogo from '../../images/twitter.svg'
import resume from '../../images/resume.png'

import ContactForm from '../forms/ContactForm'

const Contact = () => {
    return(
        <>
        <div className="contactMain">
            <div className="contactLeft">
                <h2 className="addressName h2Text">Skyler Dowdy</h2>
                <p className="addressPhone pText">(352) 390-4132</p>
                <p className="addressEmail pText"><a href="mailto:skylerwebdev@gmail.com">skylerwebdev@gmail.com</a></p>

            </div>
            <div className="contactMid">
                <h1>Resume</h1>
            <a href="https://resume.creddle.io/resume/edlcf7lr5ji" target="_blank"><img className="resume" src={resume} alt='resume'/></a>
            </div>
            <div className="contactRight">
                <a href="https://github.com/skyler2440/"><img className="ghlogo" src={ghlogo} alt="github logo"></img></a>
                <a href="https://www.linkedin.com/in/skylerwebdev/"><img className="lilogo" src={lilogo} alt="linkedin logo"></img></a>
                <a href="https://twitter.com/skylerwebdev"><img className="twlogo" src={twlogo} alt="twitter logo"/></a>
            </div>
        </div>
        <ContactForm />
        </>
    )
}
export default Contact