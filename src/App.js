import React from 'react';
import { Route } from 'react-router-dom';
import  Login from './component/Login/login';
 
function Home(){
  return (
    <h1>Welcome to React Home Page</h1>
  )
}

function App() {
  return (
   <div>
     <Route  exact path='/' component={Home}/>
     <Route  path='/Login' component={Login} />
   </div>
  );
}

export default App;
