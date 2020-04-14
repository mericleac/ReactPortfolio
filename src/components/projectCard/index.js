import React from "react";

import Title from '../title';
import Paragraph from '../paragraph';

const ProjectCard = ({ image, title, description, selectProject }) => {

    const handleClick = () => {
        selectProject(title);
    };

    return (
    <div onClick={handleClick}>
        { image && <img src={image} alt={title} />}
        <Title text={title} size={2} />
        <Paragraph text={description} />
    </div>
)};

export default ProjectCard;
export { ProjectCard };
