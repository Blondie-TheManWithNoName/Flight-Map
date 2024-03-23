import logo from "./logo.svg";
import "./App.css";
import europeMap from "./assets/europe.webp";
import EuropeMap from "./components/EuropeMap";
import CanvasMap from "./components/CanvasMap";

import axios from "axios";
import { useState, useEffect } from "react";

//f8ae28570a2633c30d877ec6e77690f2a965bfbc98522f0c4f66ee8be3083476
function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <body>
        <main>
          <div></div>
          {/* <EuropeMap /> */}
          <div className="canvas-container">
            <CanvasMap />
          </div>
          {/* <img src={europeMap} alt="" className="mapa" /> */}
          <div></div>
        </main>
      </body>
    </div>
  );
}

export default App;
