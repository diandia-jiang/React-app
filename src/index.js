import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import store from '@/store'
import App from './layout/App'
import Login from './layout/Login'

import * as serviceWorker from './serviceWorker'
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App}/>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
)
ReactDOM.render(
  <Provider store={store}>
<BrowserRouter>
  <Switch>
    <Route path="/login" component={Login}/>
  </Switch>
</BrowserRouter>
</Provider>,
  document.getElementById('root'),
)

serviceWorker.unregister()
