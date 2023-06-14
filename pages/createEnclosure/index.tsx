import axios from 'axios';
import Link from 'next/link';
import React, { useState } from 'react';

interface User {
    enclosureName: string;
    currentCapacity: number;
    maxCapacity: number;
}

const CreateEnclosure = () => {
    const [enclosureData, setEnclosureData] = useState<User | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        const { name, value } = e.target;
        setEnclosureData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleCreate = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                `https://localhost:44311/api/services/app/Enclosure/CreateEnclosure`,
                enclosureData
            );
            const newEnclosure: User = response.data.result;
            setEnclosureData({
                enclosureName: '',
                currentCapacity: 0,
                maxCapacity: 0,
            });
            console.log('New enclosure created:', newEnclosure);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <h1>Create Enclosure</h1>
            <form onSubmit={handleCreate}>
                <div>
                    <label htmlFor="enclosureName">enclosureName:</label>
                    <input
                        type="text"
                        id="enclosureName"
                        name="enclosureName"
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="currentCapacity">currentCapacity:</label>
                    <input
                        type="text"
                        id="currentCapacity"
                        name="currentCapacity"
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="maxCapacity">maxCapacity:</label>
                    <input
                        type="text"
                        id="maxCapacity"
                        name="maxCapacity"
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit">Create Enclosure</button>

                <Link href="/viewAllEnclosure">
                    <button type="submit">View Enclosure</button>
                </Link>
            </form>
        </div>
    );
};

export default CreateEnclosure;
