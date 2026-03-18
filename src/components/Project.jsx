import { useState } from 'react'
import '../components/Project.scss'

export default function Project({project}) {
    const[desktopView, setDesktopView] = useState('');
    const [selectImg, setSelectImg] = useState(0);

    return(
        <div onMouseEnter={() => 
            {
                setDesktopView('desktop-view')
                setSelectImg(1)
            }}
            onMouseLeave={() => setDesktopView('')}>
            <img src={project.image} alt="" />
            <div className='project-title'>
                <h3>{project.title}</h3>
                <p className='inline'>HTML</p>
                <p className='inline'>CSS</p>
            </div>
            {desktopView && innerWidth >= 1440 && selectImg === 1 ? 
            <div className={desktopView}>
                <button><a href={project.live_link}>View Project</a></button>
                <button><a href={project.github_link}>View Code</a></button>
            </div>:
            <div className={`project-btn`}>
                <button><a href={project.live_link} >View Project</a></button>
                <button><a href={project.github_link}>View Code</a></button>
            </div>}
        </div>
    )
}