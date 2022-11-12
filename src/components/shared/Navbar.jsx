import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class Navbar extends Component {
    setActive = ({ isActive }) => isActive ? "nav-item-active" : null;
    render() {
        return (
            <>
                <nav className="navbar">
                    <NavLink to="/" className={this.setActive}>
                        Home
                    </NavLink>
                    <NavLink to="/products" className={this.setActive}>
                        Products
                    </NavLink>
                    <NavLink to="/about" className={this.setActive}>
                        About
                    </NavLink>
                </nav>
            </>
        )
            ;
    }
}

export default Navbar;
