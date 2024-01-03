import React, { useState } from 'react';

const Signup = () => {
    const [signupData, setSignupData] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        city: '',
    });

    const handleSignup = async () => {
        try {
            const formData = new FormData();
            formData.append('email', signupData.email);
            formData.append('password', signupData.password);
            formData.append('firstName', signupData.firstName);
            formData.append('lastName', signupData.lastName);
            formData.append('city', signupData.city);

            const response = await fetch('http://localhost:8080/api/auth/signup', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();

            console.log('Signup response:', data);
        } catch (error) {
            console.error('Error in signup:', error);
        }
    };

    return (
        <div>
            <h2>Signup</h2>
            <label>Email: </label>
            <input
                type="email"
                value={signupData.email}
                onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
            />

            <label>Password: </label>
            <input
                type="password"
                value={signupData.password}
                onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
            />

            <label>First Name: </label>
            <input
                type="text"
                value={signupData.firstName}
                onChange={(e) => setSignupData({ ...signupData, firstName: e.target.value })}
            />

            <label>Last Name: </label>
            <input
                type="text"
                value={signupData.lastName}
                onChange={(e) => setSignupData({ ...signupData, lastName: e.target.value })}
            />

            <label>City: </label>
            <input
                type="text"
                value={signupData.city}
                onChange={(e) => setSignupData({ ...signupData, city: e.target.value })}
            />

            <button onClick={handleSignup}>Signup</button>
        </div>
    );
};

export default Signup;
