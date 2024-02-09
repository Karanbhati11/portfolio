import React, { useEffect, useState } from 'react'
import ActiveRoutes from './routes/ActiveRoutes'
import bgImage from './assets/img/bg/page-bg-1.jpg';
import Loader from './utils/Loader';
import Header from './components/Header';


export default function App() {


    return (
        <>
            {/* <img
                src={bgImage}
                alt="Background Image"
                className="page-wrapper home-1"
            /> */}

            {/* <Loader /> */}
            {/* <Header /> */}

            <ActiveRoutes />

        </>
    )
}
