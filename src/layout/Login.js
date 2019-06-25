import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from '@/views/Login'
//Landlord
import '@/views/Login/login.scss';
const App = () =>
  <div className="container">
    <Switch>
         <Route path="/login" component = { Login } />
    </Switch>
  </div>

export default App