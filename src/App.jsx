import { useState } from 'react'
import rings from './assets/images/pattern-rings.svg'
import circle from './assets/images/pattern-circle.svg'
import mobilePic from './assets/images/image-profile-mobile.webp'
import Project from './components/Project'
import Footer from './components/Footer'
import Github from './assets/images/icon-github.svg?react'
import FrontEnd from './assets/images/icon-frontend-mentor.svg?react'
import Linkedin from './assets/images/icon-linkedin.svg?react'
import Twitter from './assets/images/icon-twitter.svg?react'
import './App.scss'

function App() {

  return (
    <>
      <img className='circleRight' src={circle} alt="" width={129} height={129} />
        <header>
          <nav>
            <h3>adamkeyes</h3>
            <div className='links'>
              <a href="https://github.com/">
                <Github width={25} height={24} />
              </a>
              <a href="https://www.frontendmentor.io/">
                <FrontEnd width={25} height={24} />
              </a>
              <a href="https://www.linkedin.com/">
                <Linkedin width={25} height={24} />
              </a>
              <a href="https://twitter.com/">
                <Twitter width={25} height={24} />
              </a>
            </div>
          </nav>
          <img className='profileImage' src={mobilePic} alt="" width={174} height={383} />
        </header>
      <article className='description'>
        <h1 className='description-title'>Nice to meet you! I'm <span>Adam keyes</span>.</h1>
        <p className='description-main'>Based in the UK, I'm a front-end developer passionate about building accessible web apps that uses love.</p>
        <button>CONTACT ME</button>
      </article>
      <section className='experience'>
        <div className='experience-wrapper'>
          <div className='experience-container'>
            <p className='experience-title'>HTML</p>
            <p>4 Years Experience</p>
          </div>
          <div className='experience-container'>
            <p className='experience-title'>CSS</p>
            <p>4 Years Experience</p>
          </div>
          <div className='experience-container'>
            <p className='experience-title'>Javascript</p>
            <p>4 Years Experience</p>
          </div>
          <div className='experience-container'>
            <p className='experience-title'>Accessibility</p>
            <p>4 Years Experience</p>
          </div>
          <div className='experience-container'>
            <p className='experience-title'>React</p>
            <p>3 Years Experience</p>
          </div>
          <div className='experience-container'>
            <p className='experience-title'>Sass</p>
            <p>3 Years Experience</p>
          </div>
        </div>
      </section>
      <section className='project-container'>
        <Project />
      </section>
      <section className='footer-section'>
        <Footer rings={rings} />
      </section>
    </>
  )
}

export default App
