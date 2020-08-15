import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'

import Header from './components/Header';
import MapComponent from './components/Map/MapComponent';

function App() {
  return (
    <div className="App">
      <Header/>
      <div>
        <MapComponent/>
      </div>
    </div>
  );
}

export default App;
