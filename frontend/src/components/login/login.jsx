import React, { useState } from "react";

const Login = () => {
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    });

    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: loginData.email,
                    password: loginData.password,
                }),
            });

            const data = await response.json();

            console.log('Login response:', data);
        } catch (error) {
            console.error('Error in login:', error);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <label>Email: </label>
            <input
                type="email"
                value={loginData.email}
                onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
            />
            <label>Password: </label>
            <input
                type="password"
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;