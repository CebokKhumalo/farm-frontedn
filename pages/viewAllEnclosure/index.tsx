import Link from 'next/link';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button, Card, Typography, Space } from 'antd';
import { LinkOutlined } from '@ant-design/icons';
import styles from './styles.module.css';
import { useEnclosure } from '../../provider/enclosure';
import { IEnclosure } from '../../provider/enclosure/context';
import Layout from '../../components/Layout';
const { Title, Text } = Typography;

const ViewAllEnclosure = () => {
    const [enclosure, setEnclosure] = useState([]);

    const { getAllEnclosure, AllEnclosure } = useEnclosure();

    useEffect(() => {
        getAllEnclosure();
    }, []);

    const columns = [
        {
            title: 'Enclosure Name',
            dataIndex: 'enclosureName',
            key: 'enclosureName',
        },
        {
            title: 'Current Capacity',
            dataIndex: 'currentCapacity',
            key: 'currentCapacity',
        },
        {
            title: 'Max Capacity',
            dataIndex: 'maxCapacity',
            key: 'maxCapacity',
        },
        {
            title: 'Get Enclosure',
            dataIndex: 'id',
            key: 'getEnclosure',
            render: (id: IEnclosure) => (
                <Link href={`viewEnclosure?id=${id}`}>
                    <Button
                        className={`${styles.buttons} centered-button`}
                        style={{
                            fontSize: '10px',
                            color: 'white',
                        }}
                        icon={<LinkOutlined />}
                    >
                        get enclosure details
                    </Button>
                </Link>
            ),
        },
        // Add more columns for additional fields
    ];

    return (
        <Layout>
            <div className={styles.background}>
                <div className={styles.centerContent}>
                    <Card className={styles.centeredTable}>
                        <Title>Enclosure List</Title>
                        <Table
                            className={styles.table}
                            dataSource={AllEnclosure}
                            columns={columns}
                            rowKey="id"
                            pagination={false}
                        />
                        <br />
                    </Card>
                    <div>
                        <Button
                            className={styles.buttons}
                            type="primary"
                            href="createEnclosure"
                        >
                            <Link href="/createEnclosure"></Link>
                            Create Enclosure
                        </Button>
                    </div>
                </div>
            </div>
        </Layout> 
    );
};

export default ViewAllEnclosure;
