import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <>
                <nav className="navbar">
                    <NavLink to="/">
                        Home
                    </NavLink>
                    <NavLink to="/products">
                        Products
                    </NavLink>
                    <NavLink to="/about">
                        About
                    </NavLink>
                </nav>
            </>
        )
            ;
    }
}

export default Navbar;
