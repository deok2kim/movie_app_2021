import React from 'react';
import {HashRouter, Route} from 'react-router-dom';

import About from './routes/About';
import Home from './routes/Home';
import Detail from './routes/Detail';
import Navigator from './components/Navigator';

import './App.css';

function App() {
  return (
    <HashRouter>
      <Navigator />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );
}

export default App;
