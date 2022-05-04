import React from 'react';
//components
import Banner from "../components/Banner"
import CoinsTable from '../components/CoinsTable';

const HomePage = () => {
    return (
        <div>
            <Banner />
            <CoinsTable />
        </div>
    );
};

export default HomePage;