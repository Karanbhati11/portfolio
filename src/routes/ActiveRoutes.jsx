import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from '../containers/Home';
import HomePage from '../containers/HomePage';
import About from '../containers/About';

export default function ActiveRoutes() {
    return (
        <>
            <Router>
                {/* <Navbar /> */}
                <Routes>
                    {/* <Route path="/" exact element={<Home />} /> */}
                    {/* <Route path="/" exact element={<Temp />} /> */}
                    <Route path="/" exact element={<HomePage />} />
                    {/* <Route path="/about" exact element={<About />} /> */}
                </Routes>
            </Router>
        </>
    )
}
