import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewAllAnimal = () => {
    const [allAnimal, setAllAnimal] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(
                    'https://localhost:44311/api/services/app/Animal/GetAll',
                    {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    }
                );

                // Extract enclosure data from the response and update the state
                const data = response.data;
                setAllAnimal(data.result);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Animal List</h1>
            <table>
                <thead>
                    <tr>
                        <th>animal Name</th>
                        <th>age</th>
                        <th></th>
                        {/* Add more table headers for additional fields */}
                    </tr>
                </thead>
                <tbody>
                    {allAnimal.map((animal) => (
                        <tr key={animal.id}>
                            <td>{animal.animalName}</td>
                            <td>{animal.age}</td>
                            <td>
                                <Link href={`/viewAnimal?id=${animal.id}`}>
                                    <button>get Animal details</button>
                                </Link>
                            </td>
                            {/* Add more table cells for additional fields */}
                        </tr>
                    ))}
                </tbody>
            </table>

            <Link href="createAnimal">
                <button>Create New Animal</button>
            </Link>
        </div>
    );
};

export default ViewAllAnimal;
