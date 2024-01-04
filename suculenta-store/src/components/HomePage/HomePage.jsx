import React from 'react';
import Rodape from '../footer/Footer';
import Header from '../header/Header';
import SectionOne from './Section1/SectionOne';

const HomePage = () => (
    <div className='homepage'>
        <Header />
        <SectionOne />
        <Rodape />
    </div>
);

export default HomePage;