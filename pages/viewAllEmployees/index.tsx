import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { usePerson } from '../../provider/users';
//import { User } from '../../interfaces';
import { IPerson } from '../../provider/users/context';
import { Table } from 'antd';

const viewAllEmployees = () => {
    const { AllUser, getAllUser } = usePerson();
    const [viewAnimal, setViewAnimal] = useState<IPerson | null>(null);
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        getAllUser();
    }, []);

    /*useEffect(() => {
        if (UserLogin) {
            const animal = UserLogin.find((user: User) => user.id === id);
            setViewAnimal(animal);
        }
    }, [UserLogin]);*/

    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
    ];

    return (
        <Layout>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh',
                }}
            >
                <h1>Employee List</h1>
                <Table dataSource={AllUser} columns={columns} />
            </div>
        </Layout>
    );
};

export default viewAllEmployees;
