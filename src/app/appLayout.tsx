import React from 'react';
import {Outlet} from "react-router-dom";
import Header from "../shared/ui/Header";
import Footer from "../shared/ui/Footer";
import ScrollToTop from "../shared/ui/ScrollIntoTop";


export const AppLayout = () => {


    return (
            <div>
                <header>
                    <Header/>
                </header>
                <main style={{marginTop: '3rem'}}>
                    <Outlet/>
                </main>
                <footer>
                    <Footer/>
                </footer>
                <ScrollToTop/>
            </div>
    );
};