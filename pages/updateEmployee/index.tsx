import axios from 'axios';
import Link from 'next/link';
import React, { useState } from 'react';

interface User {
    id: string;
    userName: string;
    name: string;
    password: string;
    email: string;
}

const UpdateEmployee = () => {
    const [updatePerson, setUpdatePerson] = useState<User | null>(null);

    const updateEmployee = async (e: React.FormEvent) => {
        e.preventDefault();

        const token = localStorage.getItem('token');

        try {
            const res = await axios.post(
                'https://localhost:44311/api/services/app/Person/Update',
                updatePerson
            );
            const updateEmployeeDetails: User = res.data.result;
            setUpdatePerson({
                id: '',
                userName: '',
                name: '',
                password: '',
                email: '',
            });
            console.log('Employee Details Update:', updateEmployeeDetails);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <h1>Update Employee</h1>
            <form onSubmit={updateEmployee}>
                <div>
                    <label htmlFor="userName">Username:</label>
                    <input
                        type="text"
                        id="userName"
                        name="userName"
                        value={updatePerson?.userName || ''}
                        onChange={(e) =>
                            setUpdatePerson((prevPerson) => ({
                                ...prevPerson,
                                userName: e.target.value,
                            }))
                        }
                    />
                </div>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={updatePerson?.name || ''}
                        onChange={(e) =>
                            setUpdatePerson((prevPerson) => ({
                                ...prevPerson,
                                name: e.target.value,
                            }))
                        }
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={updatePerson?.password || ''}
                        onChange={(e) =>
                            setUpdatePerson((prevPerson) => ({
                                ...prevPerson,
                                password: e.target.value,
                            }))
                        }
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={updatePerson?.email || ''}
                        onChange={(e) =>
                            setUpdatePerson((prevPerson) => ({
                                ...prevPerson,
                                email: e.target.value,
                            }))
                        }
                    />
                </div>
                <button type="submit">Update Employee</button>
            </form>
            <Link href="/userPage">
                <button>Return to User</button>
            </Link>
            <Link href="/viewEmployee">
                <button>View Employee</button>
            </Link>
        </div>
    );
};

export default UpdateEmployee;
