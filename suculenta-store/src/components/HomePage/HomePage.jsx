import React from 'react';
import Rodape from '../footer/Footer';
import Header from '../header/Header';
import MostPopular from '../MostPopular/MostPopular';
import InSale from '../InSale/InSale';

const HomePage = () => (
    <div className='homepage'>
        <Header />
        <MostPopular />
        <InSale />
        <Rodape />
    </div>
);

export default HomePage;