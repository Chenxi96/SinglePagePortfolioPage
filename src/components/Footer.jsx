import Github from '../assets/images/icon-github.svg?react'
import FrontEnd from '../assets/images/icon-frontEnd-mentor.svg?react'
import Linkedin from '../assets/images/icon-linkedin.svg?react'
import Twitter from '../assets/images/icon-twitter.svg?react'
import '../components/Footer.scss'


export default function Footer({rings}) {
    return(
        <>
            <div className='contact-container'>
                <div className='contact-wrapper'>
                    <p className="contact-title">Contact</p>
                    <p className='contact-description'>I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</p>
                </div>
                <form action="">
                    <input type="text" placeholder='NAME' required/>
                    <input type="email" placeholder='EMAIL' />
                    <span className='error'></span>
                    <textarea name="Name" placeholder='MESSAGE' id="" cols="30" rows="6"></textarea>
                    <input type="submit" className='btn' value="SEND MESSAGE" />
                </form>
            </div>
            <footer>
                <div className='footer-wrapper'>
                    <h3 className='footer-title'>adamkeyes</h3>
                    <div className='footer-links'>
                        <a href="https://github.com/">
                            <Github />
                        </a>
                        <a href="https://www.frontendmentor.io/">
                            <FrontEnd />
                        </a>
                        <a href="https://www.linkedin.com/">
                            <Linkedin />
                        </a>
                        <a href="https://twitter.com/">
                            <Twitter />
                        </a>
                    </div>
                </div>
            </footer>
        </>
    )
}