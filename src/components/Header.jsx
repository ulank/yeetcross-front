import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import Navbar from "./shared/Navbar";
import {useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({});

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            setUser(user);
            console.log(user);
        }
    }, []);
    return (
        <>
            <header className="header-container">
                <NavLink className="logo" to="/">
                    yeetcross
                </NavLink>
                <Navbar/>
                {localStorage.getItem('user') ? <div className='login-username'>
                        <p>
                            {user.username} :
                        </p>
                        <button className='log-out-btn' onClick={() => {
                            localStorage.removeItem('user');
                            window.location.reload();
                        }}>
                            Log out
                        </button>
                    </div>
                    : <button className='sign-btn' onClick={() => navigate('/login')}>
                        Sign In
                    </button>}
            </header>
        </>
    );
};

export default Header;
