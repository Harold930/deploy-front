
import React from 'react';
import {Route ,Switch} from 'react-router';
import './App.css';
import Home from './Components/Home/Home';
import Nav from './Components/Nav/Nav';
import Detail from './Components/Detail/Detail';

function App() {
  return (
    <div>
          <div className='App'>
            <Route path = '/' component = {Nav}/>
            <Route exact path = '/' component = {Home}/>
            <Route  path = '/detail/:id' component = {Detail}/>
          </div>
    </div>
  );
}

export default App;