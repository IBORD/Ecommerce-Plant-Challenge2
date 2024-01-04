import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from "../HomePage/HomePage";

const Rotas = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<HomePage />} />
        </Routes>
    </BrowserRouter>
);

export default Rotas;