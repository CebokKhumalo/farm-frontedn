import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface User {
    id: string;
    animalName: number;
    age: number;
}

const viewAnimal = () => {
    const [viewAnimal, setViewAnimal] = useState<User | null>(null);
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(
                    `https://localhost:44311/api/services/app/Animal/Get?id=${id}`
                );
                setViewAnimal(response.data.result);
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
                <h1>Animal Page</h1>

                {viewAnimal && (
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '100vh',
                        }}
                    >
                        <h2>Animal Details</h2>
                        <p>ID: {viewAnimal.id}</p>
                        <p>Name: {viewAnimal.animalName}</p>
                        <p>Age: {viewAnimal.age}</p>
                    </div>
                )}
            </div>
            <Link href="/viewAllAnimal">
                <button type="submit">View Animal</button>
            </Link>
        </Layout>
    );
};

export default viewAnimal;
