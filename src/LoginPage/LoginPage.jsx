import React, { useState } from 'react';

function LoginPage({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('user'); // Default role is 'user'
    const [error, setError] = useState('');
    const [isRegistering, setIsRegistering] = useState(false); // State for toggling between login and register

    // Load users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || {
        admin: { username: 'admin', password: 'admin123', role: 'admin' },
        user: { username: 'user', password: 'user123', role: 'user' }
    };

    const handleLogin = () => {
        // Check for matching credentials in users
        const foundUser = Object.values(users).find(
            (user) => user.username === username && user.password === password
        );

        if (foundUser) {
            onLogin(foundUser.role);
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userRole', foundUser.role);
            localStorage.setItem('username', foundUser.username);
        } else {
            setError('Invalid username or password');
        }
    };

    const handleRegister = () => {
        // Check if user already exists
        if (users[username]) {
            setError('Username already exists');
            return;
        }

        // Save new user to localStorage with role restricted to 'user'
        const newUser = { username, password, role: 'user' }; // Always assign 'user' role
        const updatedUsers = { ...users, [username]: newUser };
        localStorage.setItem('users', JSON.stringify(updatedUsers));

        // Automatically log in after registration
        onLogin('user'); // Register as user only
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userRole', 'user');
        localStorage.setItem('username', username);
    };

    return (
        <div className="login-page">
            <h1>{isRegistering ? 'Register' : 'Login'}</h1>
            {error && <p className="error">{error}</p>}
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            {isRegistering && (
                <div>
                    <select value={role} onChange={(e) => setRole(e.target.value)} disabled>
                        <option value="user">User</option>
                    </select>
                </div>
            )}
            <button onClick={isRegistering ? handleRegister : handleLogin}>
                {isRegistering ? 'Register' : 'Login'}
            </button>
            <p onClick={() => setIsRegistering(!isRegistering)}>
                {isRegistering ? 'Already have an account? Login' : 'Create a new account'}
            </p>
        </div>
    );
}

export default LoginPage;
