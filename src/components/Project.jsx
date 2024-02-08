import project1 from '../assets/images/thumbnail-project-1-small.webp'
import project2 from '../assets/images/thumbnail-project-2-small.webp'
import project3 from '../assets/images/thumbnail-project-3-small.webp'
import project4 from '../assets/images/thumbnail-project-4-small.webp'
import Project5 from '../assets/images/thumbnail-project-5-small.webp'
import project6 from '../assets/images/thumbnail-project-6-small.webp'
import '../components/Project.scss'

export default function Project() {
    return(
        <>
            <div className='header-container'>
                <p className="header-title">Projects</p>
                <button className='header-btn'>CONTACT ME</button>
            </div>
            <div className='projects-container'>
                <div>
                    <img src={project1} alt="" />
                    <div className='project-title'>
                        <h3>Design Portfolio</h3>
                        <p>HTML CSS</p>
                    </div>
                    <div className='project-btn'>
                        <button>View Project</button>
                        <button>View Code</button>
                    </div>
                </div>
                <div>
                    <img src={project2} alt="" />
                    <div className='project-title'>
                        <h3>Design Portfolio</h3>
                        <p>HTML CSS</p>
                    </div>
                    <div className='project-btn'>
                        <button>View Project</button>
                        <button>View Code</button>
                    </div>
                </div>
                <div>
                    <img src={project3} alt="" />
                    <div className='project-title'>
                        <h3>Design Portfolio</h3>
                        <p>HTML CSS</p>
                    </div>
                    <div className='project-btn'>
                        <button>View Project</button>
                        <button>View Code</button>
                    </div>
                </div>
                <div>
                    <img src={project4} alt="" />
                    <div className='project-title'>
                        <h3>Design Portfolio</h3>
                        <p>HTML CSS</p>
                    </div>
                    <div className='project-btn'>
                        <button>View Project</button>
                        <button>View Code</button>
                    </div>
                </div>
                <div>
                    <img src={Project5} alt="" />
                    <div className='project-title'>
                        <h3>Design Portfolio</h3>
                        <p>HTML CSS</p>
                    </div>
                    <div className='project-btn'>
                        <button>View Project</button>
                        <button>View Code</button>
                    </div>
                </div>
                <div>
                    <img src={project6} alt="" />
                    <div className='project-title'>
                        <h3>Design Portfolio</h3>
                        <p>HTML CSS</p>
                    </div>
                    <div className='project-btn'>
                        <button>View Project</button>
                        <button>View Code</button>
                    </div>
                </div>
            </div>
        </>
    )
}