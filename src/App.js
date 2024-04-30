import React from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import ProjectPortfolio from "./components/ProjectPortfolio";
import ProjectPortfolio2 from "./components/ProjectPortfolio2";
import ProjectView from "./components/ProjectView";
import ProjectView2 from "./components/ProjectView2";
import ProjectView3 from "./components/ProjectView3";
import ProjectDemo from "./components/ProjectDemo";
import Header from "./components/Header";

import {
  MatchThree,
  NFTree,
  AmazonFishing,
  Arrakis,
  CrystalLattice,
  DataCenterStateMachine,
  FloodFill,
  Ionic,
  Obj2Spring,
  Raytracer,
  VoxelHack,
  WebGLCL,
  ReduxJournal,
  LightLab,
  MatchThreeRetyped,
  CCXTTrader,
  Cucumber,
  ValidatedEndpoint,
  RSIMLModel,
} from "./projects";

const projects = [
  AmazonFishing,
  Arrakis,
  CrystalLattice,
  DataCenterStateMachine,
  FloodFill,
  Ionic,
  Obj2Spring,
  //Raytracer,
  /*VoxelHack,*/
  WebGLCL,
  /*ReduxJournal,*/
  LightLab,
  NFTree,
  MatchThree,
  MatchThreeRetyped,
  CCXTTrader,
  Cucumber,
  ValidatedEndpoint,
  RSIMLModel,
].sort((a, b) => b.getYear() - a.getYear());

const onlyUnique = (value, index, self) => self.indexOf(value) === index;

const technologies = projects
  .flatMap((project) => project.getTechnologies())
  .filter(onlyUnique);

const App = () => (
  <div className="App bg-gray-100 h-dvh">
    <Router>
      <Routes>
        {/*<Route path="/" element={<Welcome />} />*/}

        <Route path="*" element={<Navigate to="/projects" replace />} />

        <Route
          path="/projects"
          element={
            <ProjectPortfolio2
              projects={projects}
              technologies={technologies}
            />
          }
        />

        <Route
          path="/projects/:project_id"
          element={<ProjectView3 projects={projects} />}
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
