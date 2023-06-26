import React, { useEffect } from 'react';
import { Button, Card, Space, Typography } from 'antd';
import styles from './styles.module.css';
import { useRouter } from 'next/router';
import jwt from 'jsonwebtoken';
import { JwtPayload } from 'jsonwebtoken';
import { usePerson } from '../../provider/users';

const { Text } = Typography;

const UserPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const { getUserById, PersonById } = usePerson(); // Import context

    useEffect(() => {
        const storedId = localStorage.getItem('userId');
        const userId = id || storedId;

        if (userId) {
            localStorage.setItem('userId', userId);
            getUserById(userId);
        }
    }, [id]);

    return (
        <div className={styles.background}>
            <div className={styles.container}>
                {PersonById && (
                    <Card className={styles.card}>
                        <div className={styles.cardInformation}>
                            <h2>Profile</h2>

                            <Text
                                style={{
                                    padding: '30px',
                                }}
                            >
                                Name: {PersonById.name}
                            </Text>

                            <Text
                                style={{
                                    padding: '30px',
                                }}
                            >
                                Email: {PersonById.email}
                            </Text>

                            <Text
                                style={{
                                    padding: '30px',
                                }}
                            >
                                Password: {PersonById.password}
                            </Text>

                            <Text
                                style={{
                                    padding: '30px',
                                }}
                            >
                                Username: {PersonById.userName}
                            </Text>
                        </div>
                    </Card>
                )}
            </div>
        </div>
    );
};

export default UserPage;
