import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Home from './pages/Home'
import Header from './pages/Header'
const App=()=> {
  return (
    <>
    <Header />
    <Switch>
      <Route exact path="/" component={Home}/>
    </Switch>
    </>
  );
}

export default App;
