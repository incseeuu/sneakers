import React, {useEffect} from 'react';
import {Box, Button, Paper} from "@mui/material";
import {useSelector} from "react-redux";
import {RootState} from "../../../app/store";
import {fetchSneakers} from "../../../entities/shop/model/sneakers";
import {useAppDispatch} from "../../../shared/hooks/useAppDispatch";
import {addItemToCart} from "../../../entities/cart/model/cart";
import s from './style.module.css'
import SneakersItem from "../../../shared/ui/SneakersCard/SneakersItem";


export type Sneakers = {
    id: number
    brand: string
    photo: string[]
    model: string
    price: number
    count: number
}

const Shop = () => {

    const sneackers = useSelector<RootState, Sneakers[]>(state => state.sneakersReducer)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchSneakers())
    }, [])


    const addItemToCartHandler = (item: Sneakers) => {
        dispatch(addItemToCart(item))
    }

    return (
        <Box className={s.container}
        >
            {sneackers.map(el => {
                return (
                    <SneakersItem
                        item={el}
                        addToCart={addItemToCartHandler} />
                )
            })}

        </Box>
    );
};

export default Shop;