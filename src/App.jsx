import rings from './assets/images/pattern-rings.svg'
import Home from './pages/Home'
import Footer from './components/Footer'
import Github from './assets/images/icon-github.svg?react'
import FrontEnd from './assets/images/icon-frontend-mentor.svg?react'
import Linkedin from './assets/images/icon-linkedin.svg?react'
import Twitter from './assets/images/icon-twitter.svg?react'

import './App.scss'

function App() {

  return (
    <>
        <header>
          <nav>
            <h3>chenxilin</h3>
            <div className='links'>
              <a href="https://github.com/Chenxi96">
                <Github width={25} height={24} />
              </a>
              <a href="https://www.linkedin.com/in/chenxilin/">
                <Linkedin width={25} height={24} />
              </a>
              <a href="https://twitter.com/">
                <Twitter width={25} height={24} />
              </a>
            </div>
          </nav>
          
        </header>
      <article className='description'>
        <h1 className='description-title'>Nice to meet you! I'm <span>Chen Xi Lin</span>.</h1>
        <p className='description-main'>Based in the Canada, I'm a full-stack developer passionate about building accessible web apps that uses love.</p>
        <button>CONTACT ME</button>
      </article>
      <section className='experience'>
        <div className='experience-wrapper'>
          <div className='experience-container'>
            <p className='experience-title'>React</p>
            <p>Proficient</p>
          </div>
          <div className='experience-container'>
            <p className='experience-title'>Node.js</p>
            <p>Proficient</p>
          </div>
          <div className='experience-container'>
            <p className='experience-title'>Javascript</p>
            <p>Proficient</p>
          </div>
          <div className='experience-container'>
            <p className='experience-title'>Java</p>
            <p>Actively Learning</p>
          </div>
          <div className='experience-container'>
            <p className='experience-title'>Spring Boot</p>
            <p>Actively Learning</p>
          </div>
          <div className='experience-container'>
            <p className='experience-title'>C#</p>
            <p>Actively Learning</p>
          </div>
        </div>
      </section>
      <section className='project-container'>
        <Home />
      </section>
      <section className='footer-section'>
        <Footer rings={rings} />
      </section>
    </>
  )
}

export default App
