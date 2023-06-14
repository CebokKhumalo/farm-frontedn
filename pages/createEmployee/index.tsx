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

const CreateEmployee = () => {
    const [employeeData, setEmployeeData] = useState<User | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        const { name, value } = e.target;
        setEmployeeData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleCreate = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                `https://localhost:44311/api/services/app/Person/Create`,
                employeeData
            );
            const newEmployee: User = response.data.result;
            setEmployeeData({
                id: '',
                userName: '',
                name: '',
                password: '',
                email: '',
            });
            console.log('New employee created:', newEmployee);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <h1>Create Employee</h1>
            <form onSubmit={handleCreate}>
                <div>
                    <label htmlFor="userName">Username:</label>
                    <input
                        type="text"
                        id="userName"
                        name="userName"
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit">Create Employee</button>
                <Link href="/userPage">
                    <button type="submit">Return to user</button>
                </Link>
                <Link href="/viewEmployee">
                    <button type="submit">View Employee</button>
                </Link>
            </form>
        </div>
    );
};

export default CreateEmployee;
