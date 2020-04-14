import React from 'react';

import { ProjectCardDeck } from '../../components';
import content from '../../content.json';

const ProjectsView = () => (
    <div>
        <ProjectCardDeck projectList={content.projects} />
    </div>
);

export default ProjectsView;
export { ProjectsView };
