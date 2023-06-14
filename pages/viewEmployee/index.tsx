import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const ViewEmployee = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(
                    'https://localhost:44311/api/services/app/Person/GetAll',
                    {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    }
                );

                const data = response.data;
                setEmployees(data.result);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Employee List</h1>
            <table>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Get Enclosure</th>
                        {/* Add more table headers for additional fields */}
                    </tr>
                </thead>
                <tbody>
                    {employees.map((person) => (
                        <tr key={person.id}>
                            <td>{person.userName}</td>
                            <td>{person.name}</td>
                            <td>{person.email}</td>
                            <td>
                                <Link href={`/userPage?id=${person.id}`}>
                                    <button>get enclosure details</button>
                                </Link>
                                <Link href={`/updateEmployee?id=${person.id}`}>
                                    <button>Update Employee details</button>
                                </Link>
                            </td>
                            {/* Add more table cells for additional fields */}
                        </tr>
                    ))}
                </tbody>
            </table>

            <Link href="createEmployee">
                <button>Create New Employee</button>
            </Link>
        </div>
    );
};

export default ViewEmployee;
