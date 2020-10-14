import React from 'react';

import {Helmet} from 'react-helmet';

import Layout from '../components/layout';
import Pricing from '../components/pricing';



export default () => {
    return (
        <Layout>
            <Helmet>
                <title>Parserbase: Pricing</title>
            </Helmet>
            <Pricing />
        </Layout>
    );
}