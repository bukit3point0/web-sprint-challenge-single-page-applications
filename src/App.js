import React from "react";
import {Switch, Route} from 'react-router-dom'
import './App.css'

//Pages
import Header from './components/Header'
import Home from './components/Home'
import Order from './components/Order'

const App = () => {
  return (
    <div>
      <Header/>
      
      <Switch>

        <Route>
          <Home/>
        </Route>

        <Route>
          <Order/>
        </Route>

      </Switch>
    </div>
  );
};
export default App;
