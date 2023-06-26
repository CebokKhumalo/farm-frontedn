import React from 'react';
import { RestfulProvider } from 'restful-react';
import { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { PersonProvider } from '../provider/users';
import { EnclosureProvider } from '../provider/enclosure';

function MyApp({ Component, pageProps }: AppProps) {
    // Add any additional logic or providers here
    return (
        <div>
            <PersonProvider>
                <EnclosureProvider>
                    {/*<Layout>*/}
                    <Component {...pageProps} />
                    {/*</Layout>*/}
                </EnclosureProvider>
            </PersonProvider>
        </div>
    );
}

export default MyApp;
