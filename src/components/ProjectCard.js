import React from 'react';

/*import Project from '../interfaces/project.interface'*/

import { Link } from 'react-router-dom';
import TechnologyIcons from './TechnologyIcons';


const ProjectCard = ({ project, handleViewRequest, handleDemoRequest }) => {

    let imgStyle = { backgroundColor: "#CCC" }

    return (
        <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
            <div className="card mb-4 shadow-sm">
                <div className="card-header" style={imgStyle}>
                    <i className={`fa-4x ${project.getCardIcon()} text-secondary`} />
                </div>
                {/*<div className="card-img-top text-center" style={{ width: "100%", height: 180, backgroundColor: "#000", opacity: 1.0 }}>
                    <img className="img-fluid" style={imgStyle} src={project.getCardImg()} alt="project"/>

                </div>*/}

                <div className="card-body" /*style={{ minHeight: 250 }}*/>

                    <h3 className="card-title mb-1">{project.getTitle()}
                        {/*<span className="float-right">

                            {this.props.request.additions.length > 0 ? <AdditionsBadge count={this.props.request.additions.length} /> : null}
                            {this.props.request.edits.length > 0 ? <UpdatesBadge count={this.props.request.edits.length} /> : null}

    </span>*/}
                    </h3>
                    <small className="text-muted text-center">{`${project.getYear()}`}</small>

                    <p className="card-text mt-3">{project.getCardDescription()}</p>

                    <hr />

                    <span className="align-bottom">
                        <TechnologyIcons technologies={project.getTechnologies().sort()} />
                    </span>
                </div>

                <div className="card-footer">
                    <div className="btn-group">
                        {
                            project.hasView() ?
                                <Link to={`/portfolio/${project.getLinkName()}/view`}>
                                    <button type="button" className="btn btn-sm btn-outline-primary" onClick={handleViewRequest}>View</button>
                                </Link>
                                :
                                null
                        }
                        {
                            project.hasDemo() ?
                                <Link to={`/portfolio/${project.getLinkName()}/demo`}>
                                    <button type="button" className="btn btn-sm btn-outline-success" onClick={handleDemoRequest}>Demo</button>
                                </Link>
                                :
                                null
                        }
                        {
                            project.hasRepository() ?
                                <button type="button" className="btn btn-sm btn-outline-secondary repository-btn" onClick={() => window.open(project.getRepositoryLink())}>
                                    <img src={`/assets/icons/git.svg`} alt={`git.svg`} height={18} width={18} />
                                </button>
                                :
                                null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard


