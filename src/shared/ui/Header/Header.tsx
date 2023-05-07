import React from 'react';
import {AppBar, Toolbar} from "@mui/material";
import logo from "../../../assets/logo.png";
import CustomButton from "../CustomButton/CustomButton";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import {useLocation, useNavigate} from "react-router-dom";
import { scroller } from 'react-scroll'
import s from './Header.module.css'
import {useSelector} from "react-redux";
import {RootState} from "../../../app/store";
import {CartState} from "../../../entities/cart/model/cart";


const Header = () => {

    const state = useSelector<RootState, CartState>(state => state.cartReducer)

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

    return (
        <AppBar position="fixed" color='inherit'>
            <Toolbar variant="dense" className={s.toolbar}>
                <div className={s.content} >
                    <img src={logo} alt='img' className={s.logo} onClick={onClickGoToShopHandler}/>
                    <CustomButton title={pathname === '/' ? 'Товары' : 'Главная'} variant={'text'} callback={onClickGoToShopHandler}/>
                    <CustomButton title={'Как узнать размер?'} variant={'text'} callback={onClickHowToKnowSizeHandler}/>
                    <CustomButton title={'Часто задаваемые вопросы'} variant={'text'} callback={onClickQuestionsHandler}/>
                </div>
                <div className={s.rightSide}>
                    <span>Общая стоимость: {state.totalPrice}</span>
                    <ShoppingBagOutlinedIcon/>
                    <span>{state.items.reduce((acc, val) => acc + val.count, 0)}</span>
                </div>

            </Toolbar>
        </AppBar>
    );
};

export default Header;