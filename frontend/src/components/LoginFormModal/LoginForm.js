import { useDispatch } from "react-redux"
import { useState } from "react"

import * as sessionActions from '../../store/session';

import './LoginForm.css';

const LoginForm = () => {
    const dispatch = useDispatch();

    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);


    const handleSubmit = async (e) => {
        e.preventDefault();

        const loginErrors = [];

        // return
        const results = await dispatch(sessionActions.login({ credential, password }))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.message) loginErrors.push(data.message);
            });
        if (results) {
            return results
        } else setErrors(loginErrors);
    };

    const handleDemoUser = (e) => {
        e.preventDefault();
        return dispatch(
            sessionActions.login({ credential: "Demo-lition", password: "password" })
        ).catch(async (res) => {
            const data = await res.json();
            if (data && data.errors) setErrors(data.errors);
        });
    };

    return (
        <>
            <h3 className="form-header">Log In</h3>
            <form onSubmit={handleSubmit} className='login-form'>
                <ul>
                    {errors.map((error, idx) => (
                        <li key={idx} className='error-li'>{error}</li>
                    ))}
                </ul>
                <label>
                    Username or Email
                    <div>
                        <input
                            type="text"
                            value={credential}
                            onChange={(e) => setCredential(e.target.value)}
                            required
                        />
                    </div>
                </label>
                <label>
                    Password
                    <div>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                </label>
                <div className="login-btn">
                    <button type="submit">Log In</button>
                </div>
            </form>
            <div className="auth-separator">
                <span>or</span>
            </div>
            <div>
                <form onSubmit={handleDemoUser} className="guest-login-form">
                    <button className="guest-login-btn" type="submit">
                        Guest Login
                    </button>
                </form>
            </div>
        </>
    );
}

export default LoginForm;
