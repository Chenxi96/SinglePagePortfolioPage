import '../components/Project.scss'
import Project from '../components/Project'
import { useEffect, useState } from 'react'

export default function Home() {
    const [projects, setProjects] = useState(null);

    useEffect(() => {
        const getProjects = async() => {
            const response = await fetch('https://express-app-sooty-five.vercel.app/api/listprojects');
            setProjects(await response.json());
        }
        getProjects()
    }, [])

    if(!projects) return <p>Loading...</p>; 
    console.log(projects);
    return(
        <>
            <div className='header-container'>
                <p className="header-title">Projects</p>
                <button className='header-btn'>CONTACT ME</button>
            </div>
            <div className='projects-container'>
                {projects.map((project) => {
                    return <Project project={project} />
                })}
            </div>
        </>
    )
}