import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import store from '@/store'
import App from './layout/App'
import HomeRouter from './layout/HomeRouter'
import Login from '@/views/Login'
// import Login from './layout/Login'
// import Renting from '@/component/Renting'
import * as serviceWorker from './serviceWorker'
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
      <Route path="/login" component={Login}/>
        <Route path="/home" component={HomeRouter}/>
        <Route path="/" component={App}/>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
)
// ReactDOM.render(
//   <Provider store={store}>
// <BrowserRouter>
//   <Switch>
//     <Route path="/login" component={Login}/>
//   </Switch>
// </BrowserRouter>
// </Provider>,
//   document.getElementById('root'),
// )



serviceWorker.unregister()
