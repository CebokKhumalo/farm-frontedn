import Link from 'next/link';
import Layout from '../components/Layout';
import homeStyles from '../styles/Home.module.css';
import LoginPage from '../pages/loginPage';

const IndexPage = () => (
    <Layout title="Home | Next.js + TypeScript Example">
        <LoginPage />
    </Layout>
);

export default IndexPage;
