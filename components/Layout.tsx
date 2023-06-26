import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { Layout, Menu } from 'antd';
import styles from '../../farm-frontedn/components/styles.module.css';
const { Header, Content, Sider } = Layout;

const Layouts = ({ children, title = 'This is the default title' }) => {
    const handleLogout = () => {
        localStorage.clear();
    };
    return (
        <div className={styles.background}>
            <Layout>
                <Menu
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    className={`${styles.menu} menu`}
                    // style={{ height: '50%' }}
                >
                    <Menu.Item key="/loginUser" className={styles.link}>
                        <Link href="/loginUser" onClick={handleLogout}>
                            Login
                        </Link>
                    </Menu.Item>
                    <Menu.Item key={`/userPage?id=}`} className={styles.link}>
                        <Link href={`/userPage?id=`}>View Profile</Link>
                    </Menu.Item>

                    <Menu.Item key="/viewAllEnclosure" className={styles.link}>
                        <Link href="/viewAllEnclosure">View Enclosure</Link>
                    </Menu.Item>
                    <Menu.Item key="/viewAllAnimal" className={styles.link}>
                        <Link href="/viewAllAnimal">View Animal</Link>
                    </Menu.Item>
                    <Menu.Item key="/viewAllEmployees" className={styles.link}>
                        <Link href="/viewAllEmployees">View Employee</Link>
                    </Menu.Item>
                    <Menu.Item key="/viewAllSpecies" className={styles.link}>
                        <Link href="/viewAllSpecies">View Species</Link>
                    </Menu.Item>

                    {/* Add more menu items for other pages */}
                </Menu>
                <Content>{children}</Content>
            </Layout>
        </div>
    );
};

export default Layouts;
