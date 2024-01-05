import React from 'react';
import InSale from '../InSale/InSale';
import MostPopular from '../MostPopular/MostPopular';
import Rodape from '../footer/Footer';
import Header from '../header/Header';
import SectionOne from './Section1/SectionOne';
import SectionTwo from './Section2/SectionTwo';


const HomePage = () => (
    <div className='homepage'>
        <Header />
        <SectionOne />
        <SectionTwo />
        <MostPopular />
        <InSale />
        <Rodape />
    </div>
);

export default HomePage;