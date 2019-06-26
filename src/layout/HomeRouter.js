import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '@/views/Home';
import Renting from '@/views/Home/Renting/';
// import '@/main.scss'
const App = () =>
  <div className="container">
    <Switch>
      <Route path="/home/renting" component = { Renting } />
      <Route path="/home" component = { Home } />
    </Switch>
  </div>

export default App