import React from 'react';
import {AppBar, Toolbar} from "@mui/material";
import logo from "../../assets/logo.jpg";
import CustomButton from "./CustomButton";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import {useLocation, useNavigate} from "react-router-dom";


const Header = () => {

    const {pathname} = useLocation()
    const navigate = useNavigate()


    const onClickHowToKnowSizeHandler = () => {
    }
    const onClickGoToShopHandler = () => {
        pathname === '/' ? navigate('/shop') : navigate('/')
    }
    const onClickQuestionsHandler = () => {

    }
    const onClickReviewsHandler = () => {

    }

    return (
        <AppBar position="sticky" color='inherit'>
            <Toolbar variant="dense" sx={{display: 'flex', justifyContent: 'space-between', gap: '1rem'}}>
                <div style={{display: 'flex', gap: '30px'}}>
                    <img src={logo} alt='img' style={{height: '50px'}}/>
                    <CustomButton  title={pathname === '/' ? 'Товары' : 'Главная'} variant={'text'} callback={onClickGoToShopHandler}/>
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