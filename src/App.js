import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './component/Login/login';
import {
  ProductDispaly,
  AddProducts
} from './component/Catalog/Products/Products';
import { Category, AddCategory } from './component/Catalog/Category/Category';
import { Brand, AddBrand } from './component/Catalog/Brands/Brand';
import Admin from './component/Admin/Admin';
import Top from './component/Common/Top/Top';
import Left from './component/Common/Left/Left';
import Footer from './component/Common/Footer/Footer';

// function JavaScriptFile() {
//   const script = document.createElement('script');
//   script.src = '/assets/js/image_uploads';
//   script.async = true;
//   // script.onload = () => this.scriptLoad();
//   document.body.appendChild(script);
// }
function AdminDisplay() {
  return (
    <div>
      <Top />
      <Left />
      <Admin />
      {/* <JavaScriptFile /> */}
      <Footer />
      {/* <JavaScriptFile /> */}
    </div>
  );
}
function Products() {
  return (
    <div>
      <Top />
      <Left />
      <ProductDispaly />
      {/* <JavaScriptFile /> */}
      <Footer />
    </div>
  );
}
function AddProduncts() {
  return (
    <div>
      <Top />
      <Left />
      <AddProducts />
      <Footer />
    </div>
  );
}
function category() {
  return (
    <div>
      <Top />
      <Left />
      <Category />
      {/* <JavaScriptFile /> */}
      <Footer />
    </div>
  );
}
function addcategory() {
  return (
    <div>
      <Top />
      <Left />
      <AddCategory />
      <Footer />
    </div>
  );
}
function brand() {
  return (
    <div>
      <Top />
      <Left />
      <Brand />
      {/* <JavaScriptFile /> */}
      <Footer />
    </div>
  );
}
function addbrand() {
  return (
    <div>
      <Top />
      <Left />
      <AddBrand />
      {/* <JavaScriptFile /> */}
      <Footer />
    </div>
  );
}
function App() {
  return (
    <BrowserRouter>
      <Route path="/Login" component={Login} />
      <Route exact path="/" component={AdminDisplay} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/addProducts" component={AddProduncts} />
      <Route exact path="/Category" component={category} />
      <Route exact path="/AddCategory" component={addcategory} />
      <Route exact path="/Brand" component={brand} />
      <Route exact path="/addbrand" component={addbrand} />
    </BrowserRouter>
  );
}

export default App;
