import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Link from 'next/link';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.get(
                `https://localhost:44311/api/services/app/Person/GetAsyncByEmailAndPassword?email=${email}&password=${password}`
            );

            const user = response.data.result;
            if (user) {
                const userId = user.id;
                router.push(`/userPage?id=${userId}`);
                console.log('Email:', email);
                console.log('password:', password);
            } else {
                window.alert(
                    'Credentials incorrect. Please re-enter your credentials.'
                );
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
            }}
        >
            <h1>Header</h1>

            <img
                src="image/TheGoat.jpg"
                style={{
                    height: '150px',
                    width: 'auto',
                    paddingBottom: '20px',
                }}
            />

            <form
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    width: '300px',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                        padding: '1rem',
                    }}
                >
                    <label htmlFor="username">UserName:</label>
                    <input
                        type="text"
                        id="username"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                        padding: '1rem',
                    }}
                >
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <button type="submit" onClick={handleSubmit}>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;
