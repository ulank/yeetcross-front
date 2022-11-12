import React, {Component} from 'react';
// import { Route } from 'react-router-dom';
// import AboutPage from "../page/AboutPage";
// import HomePage from "../page/HomePage";
// import ProductsPage from "../page/ProductsPage";

class Navbar extends Component {
    render() {
        return (
            <>
                <a href='/'>
                    Home
                </a>
                <a href='/products'>
                    Products
                </a>
                <a href='/about'>
                    About
                </a>
            </>
        )
            ;
    }
}

export default Navbar;
