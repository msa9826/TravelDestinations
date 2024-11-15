import React, { useState, useEffect } from 'react';

function AdminDashboard() {
    const [users, setUsers] = useState([]);
    const [newUsername, setNewUsername] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newRole, setNewRole] = useState('user');
    const [error, setError] = useState('');
    const [navbarHeight, setNavbarHeight] = useState(0);

    useEffect(() => {
        // Load users from localStorage
        const savedUsers = JSON.parse(localStorage.getItem('users')) || {};
        setUsers(Object.values(savedUsers));

        // Adjust content position after component mounts
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            setNavbarHeight(navbar.offsetHeight); // Get the height of the navbar
        }
    }, []);

    const handleAddUser = () => {
        const usersFromStorage = JSON.parse(localStorage.getItem('users')) || {};

        if (usersFromStorage[newUsername]) {
            setError('Username already exists.');
            return;
        }

        const newUser = { username: newUsername, password: newPassword, role: newRole };
        usersFromStorage[newUsername] = newUser;
        localStorage.setItem('users', JSON.stringify(usersFromStorage));

        // Refresh user list
        setUsers(Object.values(usersFromStorage));
        setNewUsername('');
        setNewPassword('');
        setNewRole('user');
        setError('');
    };

    const handleDeleteUser = (username) => {
        // Prevent deletion of the admin user
        if (username === 'admin') {
            setError('You cannot delete the admin user.');
            return;
        }

        const usersFromStorage = JSON.parse(localStorage.getItem('users')) || {};
        delete usersFromStorage[username];
        localStorage.setItem('users', JSON.stringify(usersFromStorage));

        // Refresh user list
        setUsers(Object.values(usersFromStorage));
    };

    return (
        <div className="admin-dashboard" style={{ marginTop: navbarHeight ? `${navbarHeight + 50}px` : '0' }}>
            <h2>Admin Dashboard</h2>
            {error && <p className="error">{error}</p>}

            <div className="add-user-form">
                <input
                    type="text"
                    placeholder="Username"
                    value={newUsername}
                    onChange={(e) => setNewUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                />
                <select value={newRole} onChange={(e) => setNewRole(e.target.value)}>
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                </select>
                <button onClick={handleAddUser}>Add User</button>
            </div>

            <h3>Existing Users</h3>
            <ul>
                {users.map(user => (
                    <li key={user.username}>
                        <span>{user.username} - {user.role}</span>
                        <button onClick={() => handleDeleteUser(user.username)} disabled={user.username === 'admin'}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AdminDashboard;
