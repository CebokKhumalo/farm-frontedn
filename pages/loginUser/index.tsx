import { useEffect, useState } from 'react';
import { usePerson } from '../../provider/users';
import { useRouter } from 'next/router';
import { Button, Card, Form, Input, Typography } from 'antd';
import styles from './styles.module.css';
import { IPerson } from '../../provider/users/context';
import Layouts from '../../components/Layout';
const { Text, Title } = Typography;

const loginUser = () => {
    const [emailOrEmail, setEmailOrEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const { getUserByCredentials, UserLoggedIn } = usePerson();

    useEffect(() => {
        if (UserLoggedIn != null) {
            console.log(UserLoggedIn);
        }
    }, []);

    const OnFinish = async (value: {
        emailOrEmail: string;
        password: string;
    }) => {
        if (getUserByCredentials) {
            getUserByCredentials(value.emailOrEmail, value.password);
        }
    };

    return (
        <Layouts>
            <div className={styles.background}>
                <div className={styles.container}>
                    <Card className={styles.card}>
                        <Title style={{ color: 'white', textAlign: 'center' }}>
                            Login
                        </Title>
                        <Form
                            onFinish={OnFinish}
                            className={styles.cardInformation}
                        >
                            <Form.Item
                                name="emailOrEmail"
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            'Please input your username or email!',
                                    },
                                ]}
                            >
                                <Input
                                    className={styles.inputField}
                                    placeholder="Username or Email"
                                    value={emailOrEmail}
                                    onChange={(e) =>
                                        setEmailOrEmail(e.target.value)
                                    }
                                />
                            </Form.Item>

                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                ]}
                            >
                                <Input.Password
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </Form.Item>

                            <Button className={styles.button} htmlType="submit">
                                Submit
                            </Button>
                        </Form>
                    </Card>
                </div>
            </div>
        </Layouts>
    );
};

export default loginUser;
