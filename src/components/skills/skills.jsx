import { useContext } from 'react';
import { DataContext } from '../../dataContext/data';

import { StyledSkills } from '../../UI/styledComponents/StyledComponents';

import Card from "../card/card"
import Projects from '../projects/projects';

function Skills() {
    const data = useContext(DataContext)
    return (
        <StyledSkills>
            <div className="skills-container">
                <h1 className="title">
                    Skills
                </h1>
                <div className="icons-container">
                    {data.skills.map( (skill) => <Card key={skill.name} data={skill}/>)}
                </div>
            </div>
            <Projects />

        </StyledSkills>
    )
}

export default Skills;