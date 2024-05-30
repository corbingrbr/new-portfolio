import React from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import ProjectPortfolio from "./components/ProjectPortfolio";
import ProjectView from "./components/ProjectView";

import projects from "./projects";
import * as P from "./utils/ProjectUtils";

const onlyUnique = (value, index, self) => self.indexOf(value) === index;

const getTechnologies = (projects) =>
  projects.flatMap(P.getTechnologies).filter(onlyUnique);

const App = () => (
  <div className="App bg-gray-100 h-dvh">
    <Router>
      <Routes>
        {/*<Route path="/" element={<Welcome />} />*/}

        <Route path="*" element={<Navigate to="/projects" replace />} />

        <Route
          path="/projects"
          element={
            <ProjectPortfolio
              projects={projects}
              technologies={getTechnologies(projects)}
            />
          }
        />

        <Route
          path="/projects/:project_id"
          element={<ProjectView projects={projects} />}
        />

        {/*
        <Route path="/profile"><h1 className="text-white">PROFILE</h1></Route>

        <Route path="/portfolio/:project/view" render={props => <div className="w-100"><Header activeLink="portfolio" /><ProjectView projects={projects} {...props} /></div>} />

        <Route path="/portfolio/:project/demo" render={props => <div className="w-100"><Header activeLink="portfolio" /><ProjectDemo projects={projects} {...props} /></div>} />

        <Route path="/portfolio"><ProjectPortfolio projects={projects} /></Route>

<Route path="/contact"><h1 className="text-white">CONTACT</h1></Route>
*/}
      </Routes>
    </Router>
  </div>
);

export default App;
