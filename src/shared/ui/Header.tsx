import React from 'react';
import {AppBar, Toolbar} from "@mui/material";
import logo from "../../assets/logo.jpg";
import CustomButton from "./CustomButton";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import {useLocation, useNavigate} from "react-router-dom";
import { scroller } from 'react-scroll'


const Header = () => {

    const {pathname} = useLocation()
    const navigate = useNavigate()


    const onClickHowToKnowSizeHandler = () => {
        if(pathname === '/'){
            scroller.scrollTo('section1', {
                duration: 500,
                delay: 0,
                smooth: 'easeInOutCubic'
            });
        } else {
            navigate('/')
            setTimeout(() => {
                scroller.scrollTo('section1', {
                    duration: 500,
                    delay: 0,
                    smooth: 'easeInOutCubic'
                });
            }, 500)
        }
    }
    const onClickGoToShopHandler = () => {
        pathname === '/' ? navigate('/shop') : navigate('/')
    }
    const onClickQuestionsHandler = () => {
        if(pathname === '/'){
            scroller.scrollTo('section2', {
                duration: 500,
                delay: 0,
                smooth: 'easeInOutCubic'
            });
        } else {
            navigate('/')
            setTimeout(() => {
                scroller.scrollTo('section2', {
                    duration: 1000,
                    delay: 0,
                    smooth: 'easeInOutCubic'
                });
            }, 500)
        }
    }
    const onClickReviewsHandler = () => {

    }

    return (
        <AppBar position="fixed" color='inherit'>
            <Toolbar variant="dense" sx={{display: 'flex', justifyContent: 'space-between', gap: '1rem'}}>
                <div style={{display: 'flex', gap: '30px'}}>
                    <img src={logo} alt='img' style={{height: '50px'}}/>
                    <CustomButton title={pathname === '/' ? 'Товары' : 'Главная'} variant={'text'} callback={onClickGoToShopHandler}/>
                    <CustomButton title={'Как узнать размер?'} variant={'text'} callback={onClickHowToKnowSizeHandler}/>
                    <CustomButton title={'Часто задаваемые вопросы'} variant={'text'} callback={onClickQuestionsHandler}/>
                    <CustomButton title={'Отзывы'} variant={'text'} callback={onClickReviewsHandler}/>
                </div>
                <div style={{display: 'flex'}}>
                    Корзина:<ShoppingBagOutlinedIcon/>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Header;