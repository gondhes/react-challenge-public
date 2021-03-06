import './App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home'
import Detail from './pages/Detail'
import Favorite from './pages/Favorite'

import { Provider } from 'react-redux'
import store from './store/index'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

function App() {

  return (
    <Provider store={store}>
      <Router>
        <div>
          <nav className="text-center mt-5">
            <Link to="/">Home |</Link>
            <Link to="/fav"> Favorite</Link>
          </nav>

          <Switch>
            <Route path="/country/:code">
              <Detail />
            </Route>
            <Route path="/fav">
              <Favorite />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  )
}

export default App;
