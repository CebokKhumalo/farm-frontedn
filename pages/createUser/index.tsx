import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Button, Card, Form, Input, Space, Typography } from 'antd';
import styles from './createEmp.module.css';
import { IPerson } from '../../provider/users/context';
import { usePerson } from '../../provider/users';
import Layouts from '../../components/Layout';

const { Text, Title } = Typography;

const createUser = () => {
    const [employeeData, setEmployeeData] = useState<IPerson | null>(null);
    const { UserCreated, createUser } = usePerson();

    useEffect(() => {
        if (UserCreated != null) {
            console.log(UserCreated);
        }
    }, []);

    // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const { name, value: IPerson } = e.target;
    //     createUser(value);
    // };

    const OnFinish = (value: IPerson) => {
        if (createUser) {
            createUser(value);
        }
    };

    return (
        <Layouts>
            <div className={styles.background}>
                <div className={styles.container}>
                    <Card className={styles.card} title="Create Employee">
                        <Form
                            className={styles.cardInformation}
                            onFinish={OnFinish}
                        >
                            <Form.Item label="Username" name="userName">
                                <Input
                                    type="text"
                                    name="userName"
                                    value={UserCreated?.userName}
                                />
                            </Form.Item>

                            <Form.Item label="Name" name="name">
                                <Input
                                    type="text"
                                    name="name"
                                    value={UserCreated?.name}
                                />
                            </Form.Item>

                            <Form.Item label="Password" name="password">
                                <Input.Password
                                    name="password"
                                    value={UserCreated?.password}
                                />
                            </Form.Item>

                            <Form.Item label="Email" name="email">
                                <Input
                                    type="email"
                                    name="email"
                                    value={UserCreated?.email}
                                />
                            </Form.Item>

                            <Form.Item>
                                <Space size="small">
                                    <Button type="primary" htmlType="submit">
                                        Create Employee
                                    </Button>

                                    <Link href="/viewEmployee">
                                        <Button type="primary">
                                            View Employee
                                        </Button>
                                    </Link>
                                </Space>
                            </Form.Item>
                        </Form>
                    </Card>
                </div>
            </div>
        </Layouts>
    );
};

export default createUser;
