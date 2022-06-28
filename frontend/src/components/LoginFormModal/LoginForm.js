import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import * as sessionActions from '../../store/session';
import { Redirect, useHistory } from 'react-router-dom';

import './LoginForm.css';

const LoginForm = () => {
    const dispatch = useDispatch();
    // const sessionUser = useSelector(state => state.session.user);

    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);
    // const history = useHistory();

    // if (sessionUser) return (
    //     <Redirect to='/' />
    // );

    const handleSubmit = async (e) => {
        e.preventDefault();

        // const loginErrors = [];
        setErrors([]);

        // return
        const results = await dispatch(sessionActions.login({ credential, password }))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });
        if (results) {
            // history.pushState('/');
        } else setErrors(['Login Failed']);
    };

    // return (
    //         <form onSubmit={handleSubmit} className='login-form'>
    //             <ul>
    //                 {errors.map(error => (
    //                     <li key={error.message}>{error.message}</li>
    //                 ))}
    //             </ul>
    //             <label>
    //                 Username/Email:
    //                 <input
    //                     type="text"
    //                     value={credential}
    //                     onChange={e => setCredential(e.target.value)}
    //                 />
    //             </label>
    //             <label>
    //                 Password:
    //                 <input
    //                     type="password"
    //                     value={password}
    //                     onChange={e => setPassword(e.target.value)}
    //                     required
    //                 />
    //             </label>
    //             <button type="submit">Log In</button>
    //         </form>
    // )
    return (
        <form onSubmit={handleSubmit} className='login-form'>
            <ul>
                {errors.map((error, idx) => (
                    <li key={idx}>{error}</li>
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
            <div>
                <button type="submit">Log In</button>
            </div>
        </form>
    );
}

export default LoginForm;
