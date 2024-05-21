// Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginLogic from '../components/LoginLogic';

const Login = () => {
    const [userId, setUserId] = useState(null);
    const navigate = useNavigate();

    const handleLogin = (id) => {
        setUserId(id);
        console.log("Logged in user ID:", id);
        navigate(`/dashboard/${id}`);
    };

    return (
        <div>
            {userId === null ? (
                <LoginLogic onLogin={handleLogin} />
            ) : (
                <div>
                    <h2>Welcome, User {userId}</h2>
                </div>
            )}
        </div>
    );
};

export default Login;
