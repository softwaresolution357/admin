import React from 'react';
import { Route } from 'react-router-dom';
import  Login from './component/Login/login';
import Home from "./Home/Home"


function App() {
  return (
   <div>
     <Route  path='/Login' component={Login} />
     <Route  exact path='/' component={Home}/>

     
   </div>
  );
}

export default App;
