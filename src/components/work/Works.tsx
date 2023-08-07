import { useEffect, useState } from 'react';
import './Styles.scss'

import { projectsData, projectsNav } from './Data';
import WorkItems from './WorkItems';

interface ItemConfig {
    id: number;
    image: string;
    title: string;
    category: string;
    link: string;
}

const Works = () => {

    const [item, setItem] = useState({name: "all"})
    const [projects, setProjects] = useState<any>([])
    const [active, setActive] = useState(0)

    useEffect(() => {
        if(item.name === "all") {
            setProjects(projectsData);
        } else {
            const newProjects = projectsData.filter((project) => {
                return project.category === item.name
            })
            setProjects(newProjects)
        }
    }, [item])

    const handleClick = (e: any, index: number) => {
        setItem({name: e.target.textContent})
        setActive(index)
    }

  return (
    <div>    
        <div className="work__filters">
            {projectsNav.map(({ name }, index) => {
                return (
                    <span key={index} className={`${ active === index ? "active__work" : "" } work__item`}
                        onClick={(e) => handleClick(e, index)}
                    >
                        {name}
                    </span>
                )
            })}
        </div>

        <div className="work__container container grid">
            {projects.map((itemP: ItemConfig) => {
                return <WorkItems item={itemP} key={itemP.id}/>
            })}
        </div>
    </div>
  );
}

export default Works;