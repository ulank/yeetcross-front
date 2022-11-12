import React, {Component} from 'react';

class Navbar extends Component {
    render() {
        return (
            <>
                <nav className="navbar">
                    <a href="/">
                        Home
                    </a>
                    <a href="/products">
                        Products
                    </a>
                    <a href="/about">
                        About
                    </a>
                </nav>
            </>
        )
            ;
    }
}

export default Navbar;
