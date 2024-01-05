import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from "../HomePage/HomePage";
import ProductPage from "../ProductPage/ProductPage";
import PlantRegistration from "../form/form";

const Rotas = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route path ='/ProductPage' element={<ProductPage />} />
            <Route path ='/form' element={<PlantRegistration />} />    

        </Routes>
    </BrowserRouter>
);

export default Rotas;