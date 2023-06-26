import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Button, Card, Space, Typography } from 'antd';
import styles from './styles.module.css';

const { Text, Title } = Typography;
import { species } from 'interface';
import RootLayout from '@/app/layout';

const ViewSpecies = () => {
    const [species, setSpecies] = useState<species | null>(null);
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        const fetchAnimal = async () => {
            try {
                const response = await axios.get(
                    `https://localhost:44311/api/services/app/Species/GetSpecies?id=${id}`
                );
                setSpecies(response.data.result);
            } catch (error) {
                console.log(error);
            }
        };

        if (id) {
            fetchAnimal();
        }
    }, [id]);

    return (
        <div className={styles.background}>
            {
                <div className={styles.container}>
                    {species && (
                        <Card className={styles.card}>
                            <div className={styles.cardInformation}>
                                <Space direction="vertical">
                                    <Title>Species Details</Title>
                                    <Text>
                                        ID: <Text>{species.id}</Text>
                                    </Text>{' '}
                                    <Text>
                                        Species:{' '}
                                        <Text>{species.speciesName}</Text>
                                    </Text>{' '}
                                    <Text> 
                                        Number of animals: {' '}
                                        <Text>{species.numberAlive}</Text>
                                    </Text>{' '}
                                </Space>
                            </div>
                            <Link href="/viewAllSpecies">
                                <Button className={styles?.button}>
                                    View All Animals
                                </Button>
                            </Link>
                        </Card>
                    )}
                </div>
            }
        </div>
    );
};

export default function WrappedLoginPage() {
    return (
        <RootLayout>
            <ViewSpecies />
        </RootLayout>
    );
}
