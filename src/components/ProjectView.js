import React from 'react';

import ProjectPage from './ProjectPage';

const ProjectView = ({ match, projects }) => {

    let project = projects.find(p => p.getLinkName() === match.params.project)

    return project ?
        <ProjectPage project={project}>
            <img src={project.getCardImg()} alt={project.getLinkName()} style={{ maxHeight: 350 }} className="mb-3" />
        </ProjectPage>
        :
        <h2>This project does not exist</h2>
}

export default ProjectView;