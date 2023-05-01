import React, {useEffect, useState} from 'react';
import {Box, Button} from "@mui/material";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../../../firebase";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../app/store";
import {fetchSneakers} from "../../../entities/shop/model/sneakers";
import {useAppDispatch} from "../../../shared/hooks/useAppDispatch";
import {addItemToCart} from "../../../entities/cart/model/cart";

type responseType = {
    id: string
    model: string
    photo: string
    title: string
    price: number
    count: number
}

const Shop = () => {

    const sneackers = useSelector<RootState, responseType[]>(state => state.sneakersReducer)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchSneakers())
    }, [])


    const addItemToCartHandler = (item: responseType) => {
        dispatch(addItemToCart(item))
    }

    return (
        <Box
            padding="20px"
            width="100%"
            display="grid"
            gap="1.5rem"
            sx={{
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gridTemplateRows: "repeat(auto, minmax(60px, 1fr))",
            }}
        >
            {sneackers.map(el => {
                return (
                    <Box key={el.id} bgcolor={'grey'} height={'320px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                        <h2>{el.title}</h2>
                        <img src={el.photo} alt={'img'} style={{width: '120px'}}></img>
                        <h4>Model: {el.model}</h4>
                        <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
                            <h3>Price: {el.price}</h3>
                            <Button onClick={() => addItemToCartHandler(el)} size='small' variant='contained'>Buy</Button>
                        </div>
                    </Box>
                )
            })}
        </Box>
    );
};

export default Shop;