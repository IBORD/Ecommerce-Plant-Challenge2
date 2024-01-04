import React from 'react';
import Rodape from '../footer/Footer';
import Header from '../header/Header';
import SectionOne from './Section1/SectionOne';
import MostPopular from '../MostPopular/MostPopular';
import InSale from '../InSale/InSale';


const HomePage = () => (
    <div className='homepage'>
        <Header />
        <SectionOne />
        <MostPopular />
        <InSale />
        <Rodape />
    </div>
);

export default HomePage;