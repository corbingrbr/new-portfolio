import React from 'react';

import ProjectPage from './ProjectPage';

//import IonicDemo from './projectpages/ionic/demo/IonicDemo';

const demos = {
    /*["ionic"]: IonicDemo*/
}

const ProjectDemo = ({ match, projects }) => {

    let project = projects.find(p => p.getLinkName() === match.params.project)
    let Demo = demos[project.getLinkName()]

    if (project) {
        return project.hasDemo() && Demo != null ?
            <ProjectPage project={project}>
                <Demo />
            </ProjectPage>
            :
            <h2>This project does not have a demo</h2>
    } else {
        return <h2>This project does not exist</h2>
    }
}

export default ProjectDemo;