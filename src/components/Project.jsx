import { useState } from 'react'
import project1 from '../assets/images/thumbnail-project-1-small.webp'
import project2 from '../assets/images/thumbnail-project-2-small.webp'
import project3 from '../assets/images/thumbnail-project-3-small.webp'
import project4 from '../assets/images/thumbnail-project-4-small.webp'
import Project5 from '../assets/images/thumbnail-project-5-small.webp'
import project6 from '../assets/images/thumbnail-project-6-small.webp'
import '../components/Project.scss'

export default function Project() {
    const[desktopView, setDesktopView] = useState('')
    const [selectImg, setSelectImg] = useState(0)

    return(
        <>
            <div className='header-container'>
                <p className="header-title">Projects</p>
                <button className='header-btn'>CONTACT ME</button>
            </div>
            <div className='projects-container'>
                <div onMouseEnter={() => 
                    {
                    setDesktopView('desktop-view')
                    setSelectImg(1)
                    }}
                    onMouseLeave={() => setDesktopView('')}>   
                    <img src={project1} alt="" />
                    <div className='project-title'>
                        <h3>Design Portfolio</h3>
                        <p className='inline'>HTML</p>
                        <p className='inline'>CSS</p>
                    </div>
                    {desktopView && innerWidth >= 1440 && selectImg === 1 ? 
                    <div className={desktopView}>
                        <button>View Project</button>
                        <button>View Code</button>
                    </div>:
                    <div className={`project-btn`}>
                        <button>View Project</button>
                        <button>View Code</button>
                    </div>}
                </div>
                <div onMouseEnter={() => {
                    setDesktopView('desktop-view')
                    setSelectImg(2)
                }} onMouseLeave={() => setDesktopView('')} >
                    <img src={project2} alt="" />
                    <div className='project-title'>
                        <h3>Design Portfolio</h3>
                        <p className='inline'>HTML</p>
                        <p className='inline'>CSS</p>
                    </div>
                    {desktopView && innerWidth >= 1440 && selectImg === 2 ? 
                    <div className={desktopView}>
                        <button>View Project</button>
                        <button>View Code</button>
                    </div>:
                    <div className={`project-btn`}>
                        <button>View Project</button>
                        <button>View Code</button>
                    </div>}
                </div>
                <div onMouseEnter={() => {
                    setDesktopView('desktop-view')
                    setSelectImg(3)
                }} onMouseLeave={() => setDesktopView('')} >
                    <img src={project3} alt="" />
                    <div className='project-title'>
                        <h3>Design Portfolio</h3>
                        <p className='inline'>HTML</p>
                        <p className='inline'>CSS</p>
                        <p className='inline'>JAVASCRIPT</p>
                    </div>
                    {desktopView && innerWidth >= 1440 && selectImg === 3 ? 
                    <div className={desktopView}>
                        <button>View Project</button>
                        <button>View Code</button>
                    </div>:
                    <div className={`project-btn`}>
                        <button>View Project</button>
                        <button>View Code</button>
                    </div>}
                </div>
                <div onMouseEnter={() => {
                    setDesktopView('desktop-view')
                    setSelectImg(4)
                }} onMouseLeave={() => setDesktopView('')} >
                    <img src={project4} alt="" />
                    <div className='project-title'>
                        <h3>Design Portfolio</h3>
                        <p className='inline'>HTML</p>
                        <p className='inline'>CSS</p>
                        <p className='inline'>JAVASCRIPT</p>
                    </div>
                    {desktopView && innerWidth >= 1440 && selectImg === 4? 
                    <div className={desktopView}>
                        <button>View Project</button>
                        <button>View Code</button>
                    </div>:
                    <div className={`project-btn`}>
                        <button>View Project</button>
                        <button>View Code</button>
                    </div>}
                </div>
                <div onMouseEnter={() => {
                    setDesktopView('desktop-view')
                    setSelectImg(5)
                }} onMouseLeave={() => setDesktopView('')} >
                    <img src={Project5} alt="" />
                    <div className='project-title'>
                        <h3>Design Portfolio</h3>
                        <p className='inline'>HTML</p>
                        <p className='inline'>CSS</p>
                        <p className='inline'>JAVASCRIPT</p>
                    </div>
                    {desktopView && innerWidth >= 1440 && selectImg === 5 ? 
                    <div className={desktopView}>
                        <button>View Project</button>
                        <button>View Code</button>
                    </div>:
                    <div className={`project-btn`}>
                        <button>View Project</button>
                        <button>View Code</button>
                    </div>}
                </div>
                <div onMouseEnter={() => {
                    setDesktopView('desktop-view')
                    setSelectImg(6)
                }} onMouseLeave={() => setDesktopView('')} >
                    <img src={project6} alt="" />
                    <div className='project-title'>
                        <h3>Design Portfolio</h3>
                        <p className='inline'>HTML</p>
                        <p className='inline'>CSS</p>
                        <p className='inline'>JAVASCRIPT</p>
                    </div>
                    {desktopView && innerWidth >= 1440 && selectImg === 6 ? 
                    <div className={desktopView}>
                        <button>View Project</button>
                        <button>View Code</button>
                    </div>:
                    <div className={`project-btn`}>
                        <button>View Project</button>
                        <button>View Code</button>
                    </div>}
                </div>
            </div>
        </>
    )
}