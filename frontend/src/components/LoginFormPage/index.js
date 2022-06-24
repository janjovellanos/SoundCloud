import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import * as sessionActions from '../../store/session';
import { Redirect } from 'react-router-dom';

import './LoginForm.css';

const LoginFormPage = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    if (sessionUser) return (
        <Redirect to='/' />
    );

    const handleSubmit = (e) => {
        e.preventDefault();

        const loginErrors = [];
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password }))
            .catch(async (res) => {
                const data = await res.json();
                if (data /*&& data.errors*/) loginErrors.push(data/*.errors*/);
                setErrors(loginErrors);
            });
    };

    return (
        <div className="login-box">
            <form onSubmit={handleSubmit} className='login-form'>
                <ul>
                    {errors.map(error => (
                        <li key={error.message}>{error.message}</li>
                    ))}
                </ul>
                <h2>Login</h2>
                <label>
                    Username/Email:
                    <input
                        type="text"
                        value={credential}
                        onChange={e => setCredential(e.target.value)}
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Log In</button>
            </form>
        </div>
    )
}

export default LoginFormPage;
