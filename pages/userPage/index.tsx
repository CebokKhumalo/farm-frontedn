import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import { useRouter } from 'next/router';

interface User {
    id: string;
    userName: string;
    name: string;
    password: string;
    email: string;
}

const UserPage = () => {
    const [viewUser, setViewUser] = useState<User | null>(null);
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(
                    `https://localhost:44311/api/services/app/Person/Get?id=${id}`
                );
                setViewUser(response.data.result);
            } catch (error) {
                console.log(error);
            }
        };

        if (id) {
            fetchUser();
        }
    }, [id]);

    return (
        <Layout>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh',
                }}
            >
                <h1>User Page</h1>

                {viewUser && (
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '100vh',
                        }}
                    >
                        <h2>User Details</h2>
                        <p>ID: {viewUser.id}</p>
                        <p>Name: {viewUser.name}</p>
                        <p>Username: {viewUser.userName}</p>
                        <p>Email: {viewUser.email}</p>
                    </div>
                )}
            </div>
        </Layout>
    );
};

export default UserPage;
