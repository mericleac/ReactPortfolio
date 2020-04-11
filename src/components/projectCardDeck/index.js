import React, { useState } from 'react';
import Modal from 'react-modal';

import ProjectCard from '../projectCard';
import Title from '../title';
import Paragraph from '../paragraph';

const ProjectCardDeck = ({ projectList }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalProject, setModalProject] = useState({});

    const selectProject = (projectName) => {
        projectList.some(project => {
            if (project.title === projectName) {
                setModalProject(project);
                setModalOpen(true);
                return true;
            }
            return false;
        });
    };

    const hideModal = () => {
        setModalOpen(false);
    };

    return (
        <div>
            <div>
                {projectList.map(project => (
                    <ProjectCard selectProject={selectProject} {...project} />
                ))}  
            </div>
            <Modal
              isOpen={modalOpen}
              onRequestClose={hideModal}
              contentLabel={modalProject.title}
            >
                <Title text={modalProject.title} />
                <button type="button" className="close" aria-label="Close" onClick={hideModal}>
                    <span aria-hidden="true">&times;</span>
                </button>
                { modalProject.image && <img
                  src={modalProject.image}
                  alt={modalProject.title}
                />}
                <Paragraph text={modalProject.description} />
            </Modal>
        </div>
    );
};

export default ProjectCardDeck;
export { ProjectCardDeck };
