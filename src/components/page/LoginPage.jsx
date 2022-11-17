import {useRef, useState, useEffect, useContext} from 'react';
import axios from 'axios';
import AuthContext from "../context/AuthProvider";
import {NavLink, useNavigate} from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate();

    const {setAuth} = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [email, password])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`http://localhost:8087/yeetcross/api/auth/login`, JSON.stringify({
                email: email,
                password: password
            }), {
                headers: {'Content-Type': 'application/json'}, withCredentials: true
            });
            console.log(JSON.stringify(response?.data));
            const accessToken = response?.data.token;
            localStorage.setItem('user', JSON.stringify(response?.data));
            setAuth({email: email, password: password, token: accessToken});
            setEmail('');
            setPassword('');
            setSuccess(true);
        } catch (err) {
            console.log(err);
            if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            }
        }
    }

    return (<>
        {success ? (
            navigate('/products')
        ) : (
            <section>
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                    />

                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required
                    />
                    <button>Sign In</button>
                </form>
                <p>
                    Need an Account?<br/>
                    <span className="line">
                        <NavLink to='/register'>Sign Up</NavLink>
                        </span>
                </p>
            </section>
        )}
    </>);
};

export default LoginPage;
