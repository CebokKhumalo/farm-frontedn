import axios from 'axios';
import Link from 'next/link';
import React, { useState } from 'react';
import { Button, Card, Form, Input, Modal, Typography } from 'antd';
import styles from './styles.module.css';

const { Title } = Typography;

interface Animal {
    animalName: string;
    speciesName: string;
    gender: string;
    healthStatus: string;
    age: number;
}

const CreateAnimal = () => {
    const [animalData, setAnimalData] = useState<Animal>({
        animalName: '',
        speciesName: '',
        gender: '',
        healthStatus: '',
        age: 0,
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setAnimalData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleCreate = async () => {
        try {
            const response = await axios.post(
                'https://localhost:44311/api/services/app/Animal/Create',
                animalData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            const newAnimal: Animal = response.data.result;
            console.log('New animal created:', newAnimal);

            // Show success message and refresh the page
            Modal.success({
                content: 'New animal created successfully!',
                onOk: () => window.location.reload(),
            });

            // Reset the form fields after successful creation
            setAnimalData({
                animalName: '',
                speciesName: '',
                gender: '',
                healthStatus: '',
                age: 0,
            });
        } catch (error) {
            // Show error message
            Modal.error({
                content: 'Failed to create new animal.',
            });
            console.log(error);
        }
    };

    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <Card className={styles.card}>
                    <Title>Create New Animal</Title>
                    <Form className={styles.cardInformation}>
                        <Form.Item name="animalName">
                            <Input
                                placeholder='"Animal Name'
                                type="text"
                                name="animalName"
                                value={animalData.animalName}
                                onChange={handleInputChange}
                            />
                        </Form.Item>
                        <Form.Item name="speciesName">
                            <Input
                                placeholder="Species Name"
                                type="text"
                                name="speciesName"
                                value={animalData.speciesName}
                                onChange={handleInputChange}
                            />
                        </Form.Item>
                        <Form.Item name="age">
                            <Input
                                placeholder="Age"
                                type="number"
                                name="age"
                                value={animalData.age}
                                onChange={handleInputChange}
                            />
                        </Form.Item>

                        <Form.Item name="gender">
                            <Input
                                placeholder="Gender"
                                type="text"
                                name="gender"
                                value={animalData.gender}
                                onChange={handleInputChange}
                            />
                        </Form.Item>
                        <Form.Item name="healthStatus">
                            <Input
                                placeholder="Health Status"
                                type="text"
                                name="healthStatus"
                                value={animalData.healthStatus}
                                onChange={handleInputChange}
                            />
                        </Form.Item>
                    </Form>

                    <Form.Item>
                        <Button
                            className={styles.buttons}
                            type="primary"
                            onClick={handleCreate}
                        >
                            Create Animal
                        </Button>
                    </Form.Item>
                </Card>
            </div>
        </div>
    );
};

export default CreateAnimal;
