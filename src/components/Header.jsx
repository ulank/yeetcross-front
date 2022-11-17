import React, {Component} from 'react';
import Navbar from "./shared/Navbar";
import {NavLink} from "react-router-dom";
import Dialog from "./shared/Dialog";

class Header extends Component {
    state = {
        isOpen: false
    }
    render() {
        return (
            <>
                <header className="header-container">
                    <NavLink className="logo" to="/">
                        yeetcross
                    </NavLink>
                    <Navbar/>
                    <button className="sign-btn" onClick={() => this.setState({ isOpen: true })}>
                        Sign In
                    </button>
                </header>
                <Dialog isOpen={this.state.isOpen} onClose={() => this.setState({ isOpen: false })}>
                </Dialog>
            </>

        );
    }
}

export default Header;

