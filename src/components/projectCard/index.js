import React from "react";

import Title from '../title';
import Paragraph from '../paragraph';

const ProjectCard = ({ image, title, description }) => (
    <div>
        { image && <img src={image.src} alt={image.name} />}
        <Title text={title} size={24} />
        <Paragraph text={description} />
    </div>
);

export default ProjectCard;
export { ProjectCard };
