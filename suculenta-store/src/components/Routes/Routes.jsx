import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from "../HomePage/HomePage";
import PlantRegistration from "../form/form";

const Rotas = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route path='/form' element={<PlantRegistration />} />
        </Routes>
    </BrowserRouter>
);

export default Rotas;