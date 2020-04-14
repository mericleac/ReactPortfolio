import React from "react";
import styled from 'styled-components';

import Title from '../title';
import Paragraph from '../paragraph';

const ProjectCard = ({ image, title, description, selectProject }) => {

    const handleClick = () => {
        selectProject(title);
    };

    return (
    <Card onClick={handleClick}>
        <div>
            { image && <img src={image} alt={title} />}
        </div>
        <div>
            <Title text={title} size={2} />
            <Paragraph text={description} size={1} />
        </div>
    </Card>
)};

const Card = styled.div`
    display: flex;
    flex-direction: row;
`;

export default ProjectCard;
export { ProjectCard };
