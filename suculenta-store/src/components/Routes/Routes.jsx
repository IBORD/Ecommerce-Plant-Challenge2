import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from "../AboutUs/AboutUs";
import HomePage from "../HomePage/HomePage";
import ProductPage from "../ProductPage/ProductPage";
import PlantRegistration from "../form/form";

const Rotas = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route path='/form' element={<PlantRegistration />} />
            <Route path='/ProductPage' element={<ProductPage />} />
            <Route path='/aboutus' element={<AboutUs />} />
        </Routes>
    </BrowserRouter>
);

export default Rotas;