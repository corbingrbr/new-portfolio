import React from 'react';

const IonicDemo = () => <canvas data-processing-sources={["ionic", "atom", "colorBox", "eDisplay", "electron", "element", "elements", "ionizationEnergy"].map(file => `assets/ionic/pde/${file}.pde`)} style={{height: 500, width: "100%"}} />

export default IonicDemo;