import { useState } from 'react'
import rings from './assets/images/pattern-rings.svg'
import circle from './assets/images/pattern-circle.svg'
import github from './assets/images/icon-github.svg'
import frontEnd from './assets/images/icon-frontEnd-mentor.svg'
import linkedin from './assets/images/icon-linkedin.svg'
import twitter from './assets/images/icon-twitter.svg'
import mobilePic from './assets/images/image-profile-mobile.webp'
import Project from './projects/Project'
import './App.scss'

function App() {

  return (
    <>
      <img className='ringLeft' src={rings} alt="" />
      <img className='circleRight' src={circle} alt="" />
        <header>
          <nav>
            <h3>adamkeyes</h3>
            <div className='links'>
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
          </nav>
          <img className='profileImage' src={mobilePic} alt="" width={174} />
        </header>
      <article className='description'>
        <h1>Nice to meet you! I'm <span>Adam keyes.</span></h1>
        <p>Based in the UK, I'm a front-end developer passionate about building accessible web apps that uses love.</p>
        <button>CONTACT ME</button>
      </article>
      <section className='experience'>
        <div className='experience-wrapper'>
          <div>
            <h2>HTML</h2>
            <p>4 Years Experience</p>
          </div>
          <div>
            <h2>CSS</h2>
            <p>4 Years Experience</p>
          </div>
          <div>
            <h2>Javascript</h2>
            <p>4 Years Experience</p>
          </div>
          <div>
            <h2>Accessibility</h2>
            <p>4 Years Experience</p>
          </div>
          <div>
            <h2>React</h2>
            <p>3 Years Experience</p>
          </div>
          <div>
            <h2>Sass</h2>
            <p>3 Years Experience</p>
          </div>
        </div>
      </section>
      <section>
        <Project />
      </section>
    </>
  )
}

export default App
