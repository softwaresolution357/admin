import React from 'react';
import {  BrowserRouter ,Route, Switch } from 'react-router-dom';
import  Login from './component/Login/login';
import  {ProductDispaly,AddProducts} from './component/Catalog/Products/Products';
import Admin from './component/Admin/Admin';
import Top from './component/Common/Top/Top';
import Left from './component/Common/Left/Left';
import Footer from './component/Common/Footer/Footer';
const ScriptFile = ()=> {
  return(
    <script>
    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/js/bootstrap.bundle.min.js"></script>
    <script src="assets/js/metisMenu.min.js"></script>
    <script src="assets/js/jquery.slimscroll.js"></script>
    <script src="assets/js/waves.min.js"></script>
    <script src="assets/pages/dashboard.js"></script>
    <script src="assets/js/app.js"></script>
    </script>
    
  )

}

function App() {
  return (
          <BrowserRouter>
                <Route  path='/Login' component={Login} />
                <Top />
                <Left />
                <switch>
                <Route exact path="/" component = {Admin}/>
                <Route  exact path="/products" component={ProductDispaly} />
                <Route exact path = "/addProducts" component = {AddProducts}/>
                </switch>
                
                <Footer />
                <ScriptFile />
      </BrowserRouter>
  );
}

export default App;
