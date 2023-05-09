import React from 'react';
import {Box, Button, Paper, Typography} from "@mui/material";
import s from './styles.module.css'
import {useSelector} from "react-redux";
import {RootState} from "../../app/store";
import {CartState, clearCart} from "../../entities/cart/model/cart";
import CartCard from "../../shared/ui/CartCard/CartCard";
import {useAppDispatch} from "../../shared/hooks/useAppDispatch";
import {useNavigate} from "react-router-dom";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import CardEmpty from "../../shared/ui/CartEmpty/CardEmpty";

const Cart = () => {

    const {items, totalPrice} = useSelector<RootState, CartState>(state => state.cartReducer)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const clearCartHandler = () => {
        dispatch(clearCart([]))
    }

    const goBackIntoShopHandler = () => {
        navigate('/shop')
    }

    return (
        <>
            <Button
                onClick={goBackIntoShopHandler}
                className={s.btn}
                size='small'
                color={'inherit'}
                variant='contained'
                sx={{
                    fontFamily: 'russian-regular, sans-serif',
                    alignSelf: 'start',
                    marginTop: '2rem',
                    marginLeft: '2rem'
            }}
            >
                <KeyboardBackspaceIcon/>
                Вернуться к выбору
            </Button>
            {items.length > 0
                ? <Box className={s.container}>

                    <Box className={s.leftSide}>
                        <Typography className={s.header} variant={'h6'}>В вашей корзине:</Typography>
                        <Box className={s.content}>
                            {items.map(el => {
                                return (
                                    <Paper elevation={6} key={el.id}>
                                        <CartCard id={el.id} imgSrc={el.photo[0]} brand={el.brand} model={el.model} price={el.price}/>
                                    </Paper>
                                )
                            })}
                        </Box>
                    </Box>
                    <Box className={s.rightSide}>
                        <Typography className={s.header} variant={'h6'}>Общая стоимость: {totalPrice} руб.</Typography>
                        <Box className={s.btnBox}>
                            <Button
                                className={s.btn}
                                size='small'
                                color={'inherit'}
                                variant='contained'
                                sx={{fontFamily: 'russian-regular, sans-serif'}}
                            >
                                Подтвердить заказ
                            </Button>
                            <Button
                                className={s.btn}
                                onClick={clearCartHandler}
                                size='small'
                                color={'inherit'}
                                variant='outlined'
                                sx={{fontFamily: 'russian-regular, sans-serif'}}
                            >
                                Очистить корзину
                            </Button>
                        </Box>
                    </Box>
                </Box>
                : <CardEmpty/>
            }
        </>

    );
};

export default Cart;