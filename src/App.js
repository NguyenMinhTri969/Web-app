import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import RouterURL from './RouterURL/RouterURL';

function App() {
  return (
    <div className="App">
      <Router>
        <RouterURL />
      </Router>
    </div>
  );
}

export default App;
