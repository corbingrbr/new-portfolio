import React from 'react';

import { Link } from 'react-router-dom';
import TechnologyIcons from './TechnologyIcons';

const ProjectView = ({ project }) => {

    let imgStyle = { backgroundColor: "#CCC" }

    return (
        <div className="row justify-content-center">
            <div className="col-sm-11 col-md-8 col-lg-8 m-4">
                <div className="card mb-4 shadow-sm m-5">
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
                            <TechnologyIcons technologies={project.getTechnologies().sort()} justifyCenter={true} />
                        </span>

                        <hr />

                        <img src={project.getCardImg()} style={{ maxHeight: 350 }} className="mb-3" />

                        <hr />

                    </div>

                    <div className="card-footer">
                        <div className="btn-group">
                            <Link to='/projects'>
                                <button type="button" className="btn btn-sm btn-outline-secondary">To Portfolio</button>
                            </Link>

                            {
                                project.hasDemo() ?
                                    <Link to={`/projects/${project.getLinkName()}/demo`} >
                                        <button type="button" className="btn btn-sm btn-outline-success">Demo</button>
                                    </Link>
                                    :
                                    null
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectView;