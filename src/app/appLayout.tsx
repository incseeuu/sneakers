import React, {useEffect} from 'react';
import {Outlet, useLocation} from "react-router-dom";
import Header from "../shared/ui/Header/Header";
import Footer from "../shared/ui/Footer/Footer";
import ScrollToTop from "../shared/ui/ScrollIntoTop/ScrollIntoTop";
import {animateScroll} from "react-scroll";


export const AppLayout = () => {

    const {pathname} = useLocation()

    useEffect(() => {
        function scrollHandler() {
            if (window.scrollY > 0) {
                animateScroll.getAnimationType({smooth: true});
            }
        }
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, []);

    return (
            <div>
                <header>
                    <Header/>
                </header>
                <main style={{margin: '3rem 0',}}>
                    <Outlet/>
                </main>
                <footer style={{minHeight: '1px'}}>
                    {pathname !== '/' || <Footer/>}
                </footer>
                <ScrollToTop/>
            </div>
    );
};