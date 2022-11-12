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
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste a ipsam repellendus commodi ad, fugit id magnam inventore laudantium autem delectus praesentium incidunt debitis, numquam dicta eveniet obcaecati, itaque quidem?
                </Dialog>
            </>

        );
    }
}

export default Header;

