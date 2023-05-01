import React from 'react';
import {Outlet} from "react-router-dom";
import Header from "../shared/ui/Header";
import Footer from "../shared/ui/Footer";


export const AppLayout = () => {


    return (
        <div>
            <header>
                <Header/>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
};