import { nanoid } from 'nanoid';

import { StyledSkills } from '../../UI/styledComponents/StyledComponents';

import Card from "../card/card"

function Skills({ data }) {
    return (
        <StyledSkills id="skills">
            <div className="icons-container">
              {data.map( (skill) => <Card key={nanoid()} data={skill}/>)}
            </div>
        </StyledSkills>
    )
}

export default Skills;