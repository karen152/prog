// src/componentes/navegacion.js
import React from "react";
import { Route, Routes } from 'react-router-dom';
import Turnos from "./turno";
import App from "../App";

function Navegacion() {
    return (
        <Routes>
            <Route path='/' />
            <Route path='/visitas' element={<Turnos />} />
            <Route path='/elementos' element={<h1>Elementos</h1>} />
        </Routes>
    );
}

export default Navegacion;
