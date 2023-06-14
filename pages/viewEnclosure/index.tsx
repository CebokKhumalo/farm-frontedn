import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface User {
    id: string;
    enclosureName: string;
    currentCapacity: number;
    maxCapacity: number;
}

const ViewEnclosure = () => {
    const [viewEnclosure, setViewEnclosure] = useState<User | null>(null);
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(
                    `https://localhost:44311/api/services/app/Enclosure/GetEnclosure?id=${id}`
                );
                setViewEnclosure(response.data.result);
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
                <h1>Enclosure Page</h1>

                {viewEnclosure && (
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '100vh',
                        }}
                    >
                        <h2>Enclosure Details</h2>
                        <p>ID: {viewEnclosure.id}</p>
                        <p>Name: {viewEnclosure.enclosureName}</p>
                        <p>Username: {viewEnclosure.currentCapacity}</p>
                        <p>Email: {viewEnclosure.maxCapacity}</p>
                    </div>
                )}
            </div>
            <Link href="/viewAllEnclosure">
                <button type="submit">View Enclosure</button>
            </Link>
        </Layout>
    );
};

export default ViewEnclosure;
