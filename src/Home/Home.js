import React from 'react';
import { Route } from 'react-router-dom';

import Top from '../component/Common/Top/Top';
import Left from '../component/Common/Left/Left';
import Admin from "../component/Admin/Admin";
import Footer from "../component/Common/buttom/button"
const Home = () =>{
    return (
        <Route>
            <div id="wrapper">
                <Top />
                <Left />
                <Admin />
                <Footer />
            </div>
        </Route>
    )
}

export default Home;