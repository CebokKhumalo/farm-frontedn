import axios from 'axios';
import Link from 'next/link';
import React, { useState } from 'react';

interface User {
    animalName: string;
    speciesName: string;
    age: number;
}

const CreateSpecies = () => {
    const [animalData, setAnimalData] = useState<User | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        const { name, value } = e.target;
        setAnimalData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleCreate = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                `https://localhost:44311/api/services/app/Animal/Create`,
                animalData
            );
            const newEmployee: User = response.data.result;
            setAnimalData({
                animalName: '',
                speciesName: '',
                age: 0,
            });
            console.log('New employee created:', newEmployee);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            <h1>Create New Animal</h1>
            <form onSubmit={handleCreate}>
                <div>
                    <label htmlFor="animalName">Animal Name:</label>
                    <input
                        type="text"
                        id="animalName"
                        name="animalName"
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="speciesName">Species Name:</label>
                    <input
                        type="text"
                        id="speciesName"
                        name="speciesName"
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="age">Age:</label>
                    <input
                        type="number"
                        id="age"
                        name="age"
                        onChange={handleInputChange}
                    />
                </div>

                <Link href="/createSpecies">
                    <button>create Species</button>
                </Link>

                <button type="submit">Create Animal</button>
            </form>
        </div>
    );
};

export default CreateSpecies;
