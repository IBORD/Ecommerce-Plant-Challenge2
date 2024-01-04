import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from "../HomePage/HomePage";
import AboutUs from "../AboutUs/AboutUs";

const Rotas = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route path='/aboutus' element={<AboutUs />} />
        </Routes>
    </BrowserRouter>
);

export default Rotas;