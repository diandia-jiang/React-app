import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from '@/views/Home'
import User from '@/views/User'
import House from '@/views/House'
import News from '@/views/News'
import Login from '@/views/Login'
//Landlord
import Error from '@/views/Error'
import Footer from '@/component/common/footer'
import '@/main.scss'
const App = () =>
  <div className="container">
    <Switch>
      <Route path="/home" component = { Home } />
      <Route path="/news" component = { News } />
      <Route path="/house" component = { House } />
      <Route path="/user" component = { User } />
      <Route path="/login" component = { Login } />
      <Redirect exact from="/" to="/home" />
      <Route component = { Error } />
    </Switch>
    <Footer />
  </div>

export default App