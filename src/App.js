import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Skills from './Pages/Skills';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/skills" component={Skills} />
    </Switch>
  );
}
