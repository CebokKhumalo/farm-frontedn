'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { Button, Card, Space, Typography } from 'antd';
import styles from './styles.module.css';
import { useRouter } from 'next/router';
import Layouts from '../../components/Layout';
const { Text } = Typography;

interface User {
    id: string;
    userName: string;
    name: string;
    password: string;
    email: string;
}

const UserPage = () => {
    const [viewUser, setViewUser] = useState<User>({
        id: '',
        userName: '',
        name: '',
        password: '',
        email: '',
    });

    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        const storedId = localStorage.getItem('userId');
        const userId = id || storedId;

        const fetchUser = async () => {
            try {
                const response = await axios.get(
                    `https://localhost:44311/api/services/app/Person/Get?id=${userId}`
                );
                setViewUser(response.data.result);
            } catch (error) {
                console.log(error);
            }
        };

        if (userId) {
            localStorage.setItem('userId', userId);
            fetchUser();
        }
    }, [id]);

    return (
        <Layouts>
            <div className={styles.background}>
                <div className={styles.container}>
                    {viewUser && (
                        <Card className={styles.card}>
                            <div className={styles.cardInformation}>
                                <h2>Profile</h2>

                                <Text
                                    style={{
                                        padding: '30px',
                                    }}
                                >
                                    Name: {viewUser.name}
                                </Text>

                                <Text
                                    style={{
                                        padding: '30px',
                                    }}
                                >
                                    Email: {viewUser.email}
                                </Text>

                                <Text
                                    style={{
                                        padding: '30px',
                                    }}
                                >
                                    Password: {viewUser.password}
                                </Text>

                                <Text
                                    style={{
                                        padding: '30px',
                                    }}
                                >
                                    Username: {viewUser.userName}
                                </Text>
                            </div>
                        </Card>
                    )}
                </div>
            </div>
        </Layouts>
    );
};

export default UserPage;
