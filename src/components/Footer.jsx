import '../components/Footer.scss'
import github from '../assets/images/icon-github.svg'
import frontEnd from '../assets/images/icon-frontEnd-mentor.svg'
import linkedin from '../assets/images/icon-linkedin.svg'
import twitter from '../assets/images/icon-twitter.svg'


export default function Footer({rings}) {
    return(
        <>
            <div className='contact-container'>
                <p className="contact-title">Contact</p>
                <p className='contact-description'>I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</p>
                <form action="">
                    <label htmlFor="">NAME</label>
                    <input type="text" />
                    <label htmlFor="">EMAIL</label>
                    <input type="text" />
                    <label htmlFor="">Message</label>
                    <textarea name="Name" id="" cols="30" rows="6"></textarea>
                    <input className='btn' type="button" value="SEND MESSAGE" />
                </form>
                <img className='ringFooter' src={rings} alt="" />
            </div>
            <footer>
                <div className='footer-wrapper'>
                    <h3>adamkeyes</h3>
                    <div className='footer-links'>
                        <a href="https://github.com/">
                            <img src={github} alt="github-icon" />
                        </a>
                        <a href="https://www.frontendmentor.io/">
                            <img src={frontEnd} alt="frontend-icon" />
                        </a>
                        <a href="https://www.linkedin.com/">
                            <img src={linkedin} alt="linkedin-icon" />
                        </a>
                        <a href="https://twitter.com/">
                            <img src={twitter} alt="twitter-icon" />
                        </a>
                    </div>
                </div>
            </footer>
        </>
    )
}