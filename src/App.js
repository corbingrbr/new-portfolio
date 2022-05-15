import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import ProjectPortfolio from './components/ProjectPortfolio';
import ProjectView from './components/ProjectView';
import ProjectDemo from './components/ProjectDemo';
import Header from './components/Header'

import { NFTree, AmazonFishing, Arrakis, CrystalLattice, DataCenterStateMachine, FloodFill, Ionic, Obj2Spring, Raytracer, VoxelHack, WebGLCL, ReduxJournal, LightLab } from './projects'

const projects = [
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
  NFTree
].sort((a, b) => b.getYear() - a.getYear());

const App = () => (

  <div className="App" style={{ height: "100%" }}>

    <Router>
      <Routes>

        <Route path="/portfolio" element={<ProjectPortfolio projects={projects} />} />

        {/*
        <Route path="/profile"><h1 className="text-white">PROFILE</h1></Route>

        <Route path="/portfolio/:project/view" render={props => <div className="w-100"><Header activeLink="portfolio" /><ProjectView projects={projects} {...props} /></div>} />

        <Route path="/portfolio/:project/demo" render={props => <div className="w-100"><Header activeLink="portfolio" /><ProjectDemo projects={projects} {...props} /></div>} />

        <Route path="/portfolio"><ProjectPortfolio projects={projects} /></Route>

<Route path="/contact"><h1 className="text-white">CONTACT</h1></Route>
*/}


        {/*<Route
          path="*"
          element={<Navigate to="/portfolio" replace />}
/>*/}

        {/*<Redirect exact from="/" to="portfolio" />*/}

      </Routes>
    </Router>

  </div >
);

export default App;
