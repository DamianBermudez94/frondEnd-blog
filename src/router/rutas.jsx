import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Inicio } from "../components/pages/Inicio";
import { Busqueda } from "../components/pages/Busqueda";
import { Crear } from "../components/pages/Crear";
import Articulos from "../components/pages/Articulos";
import { Articulo } from "../components/pages/Articulo";
import { Header } from "../components/layout/Header";
import { Nav } from "../components/layout/Nav";
import { Footer } from "../components/layout/Footer";
import { Sidebar } from "../components/layout/Sidebar";


export const Rutas = ()=>{

    return(
    
        <BrowserRouter>
            {/*Layout*/}
            <Header></Header>
            <Nav></Nav>
            {/*Contenido principal y rutas*/}
            <section id="content" className="content">
                <Routes>
                    <Route path="/" element={<Inicio/>}/>
                    <Route path="/inicio" element={<Inicio/>}/>
                    <Route path="/busqueda" element={<Busqueda/>}/>
                    <Route path="/crear" element={<Crear/>}/>
                    <Route path="/articulos" element={<Articulos/>}/>
                    <Route path="/articulo" element={<Articulo/>}/>
                </Routes>
            </section>
            <Sidebar/>
            <Footer></Footer>
        </BrowserRouter>

    )

}