// import logo from './logo.svg';
// import './App.css';


import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PeoplePage from './components/people/peoplePage';
import PageNotFound from './components/PageNotFound';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={PeoplePage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
