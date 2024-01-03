import React, { useEffect, useState } from 'react';

const Dashboard = () => {
    const [userData, setUserData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/dashboard');
                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.message || 'Failed to fetch user data');
                }

                setUserData(data.user);
            } catch (error) {
                setError(error.message || 'An error occurred while fetching user data');
            }
        };

        fetchUserData();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2>User Dashboard</h2>
            <ul>
                {userData.map((user) => (
                    <li key={user._id}>
                        <p>Email: {user.email}</p>
                        <p>First Name: {user.firstName}</p>
                        <p>Last Name: {user.lastName}</p>
                        <p>City: {user.city}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
