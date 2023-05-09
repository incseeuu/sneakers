import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import s from './style.module.css'
import {Button} from "@mui/material";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {removeItemFromCart} from "../../../entities/cart/model/cart";

type Props = {
    id: number
    imgSrc: string
    brand: string
    model: string
    price: number
}

const CartCard = ({imgSrc, price, model, brand, id}: Props) => {

    const dispatch = useAppDispatch()

    const removeItemHandler = () => {
        dispatch(removeItemFromCart(id))
    }

    return (
        <Card className={s.container} sx={{display: 'flex'}}>
            <CardContent className={s.content} sx={{flex: '1 1 auto'}}>
                <Typography variant="h5">
                    {brand}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                    {model}
                </Typography>
                <Typography className={s.price} variant="subtitle1" color="text.secondary">
                    {price} руб.
                </Typography>
                <Button
                    className={s.btn}
                    onClick={removeItemHandler}
                    size='small'
                    color={'inherit'}
                    variant='outlined'
                    sx={{fontFamily: 'russian-regular, sans-serif'}}
                >
                    Удалить
                </Button>
            </CardContent>
            <CardMedia
                component="img"
                sx={{width: 151}}
                image={imgSrc}
                alt="Live from space album cover"
            />
        </Card>
    );
};

export default CartCard;