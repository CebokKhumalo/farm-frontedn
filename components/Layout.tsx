import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';

type Props = {
    children?: ReactNode;
    title?: string;
};

const Layout = ({ children, title = 'This is the default title' }: Props) => (
    <div>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
            />
        </Head>
        <header>
            <nav>
                <Link href="/home">Home</Link> |{' '}
                <Link href="/userPage">About</Link>|{' '}
                <Link href="/viewAllEnclosure">View Enclosures</Link>|{' '}
                <Link href="/viewEmployee">View Employee</Link>|{' '}
                <Link href="/viewAllAnimal">View Animal</Link>|{' '}
                <a href="/loginPage">Logout</a>
            </nav>
        </header>

        {children}
    </div>
);

export default Layout;
