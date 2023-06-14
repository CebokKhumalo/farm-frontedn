import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewAllEnclosure = () => {
    const [enclosure, setEnclosure] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(
                    'https://localhost:44311/api/services/app/Enclosure/GetAllEnclosure',
                    {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    }
                );

                // Extract enclosure data from the response and update the state
                const data = response.data;
                setEnclosure(data.result);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Enclosure List</h1>
            <table>
                <thead>
                    <tr>
                        <th>enclosureName</th>
                        <th>currentCapacity</th>
                        <th>maxCapacity</th>
                        <th>Get Enclosure</th>
                        {/* Add more table headers for additional fields */}
                    </tr>
                </thead>
                <tbody>
                    {enclosure.map((enclosures) => (
                        <tr key={enclosures.id}>
                            <td>{enclosures.enclosureName}</td>
                            <td>{enclosures.currentCapacity}</td>
                            <td>{enclosures.maxCapacity}</td>
                            <td>
                                <Link
                                    href={`/viewEnclosure?id=${enclosures.id}`}
                                >
                                    <button>get enclosure details</button>
                                </Link>
                            </td>
                            {/* Add more table cells for additional fields */}
                        </tr>
                    ))}
                </tbody>
            </table>

            <Link href="createEnclosure">
                <button>Create New Enclosure</button>
            </Link>
        </div>
    );
};

export default ViewAllEnclosure;
