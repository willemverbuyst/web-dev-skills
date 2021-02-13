import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import SchoolDashboard from './Pages/SchoolDashboard';
import Skills from './Pages/Skills';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/schooldashboard" component={SchoolDashboard} />
      <Route exact path="/skills" component={Skills} />
    </Switch>
  );
}
