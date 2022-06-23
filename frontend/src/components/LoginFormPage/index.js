import { useDispatch } from "react-redux"
import { useState } from "react"
import { login } from "../../store/session"


const LoginFormPage = () => {
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(login({ credential, password }))
    };

    return (
        <form onSubmit={handleSubmit} >
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
                    type="text"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </label>
            <input type="submit" />
        </form>
    )
}

export default LoginFormPage;
