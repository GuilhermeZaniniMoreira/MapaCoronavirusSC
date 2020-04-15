import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'

import Header from './components/Header';
import Map from './components/Map/Map';

function App() {
  return (
    <div className="App">
      <Header/>
      <div style={{width: '100%', height: '400px'}}>
        <Map/>
      </div>
    </div>
  );
}

export default App;
