import React, {Component} from 'react';
import Navbar from "./shared/Navbar";

class Header extends Component {
    render() {
        return (
            <header className="header-container">
                <a className="logo" href="/">
                    yeetcross
                </a>
                <Navbar/>
                <button className="sign-btn">
                    Sign In
                </button>
            </header>
        );
    }
}

export default Header;
