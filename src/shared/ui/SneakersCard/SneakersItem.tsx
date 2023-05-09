import React from 'react';
import {Box, Button, Paper, Typography} from "@mui/material";
import s from './style.module.css'
import Carousel from "../Carousel/Carousel";
import CheckIcon from '@mui/icons-material/Check';
import {useSelector} from "react-redux";
import {RootState} from "../../../app/store";
import {CartState} from "../../../entities/cart/model/cart";
import {SneakersStateType} from "../../../entities/shop/model/sneakers";

type Props = {
    item: SneakersStateType
    addToCart: (item: SneakersStateType) => void
}

const SneakersItem = ({item, addToCart}: Props) => {

    const {items} = useSelector<RootState, CartState>(state => state.cartReducer)

    const {id, brand, photo, model, price} = item

    const addToCartHandler = () => {
        addToCart(item)
    }

    const isItemAdded = () => {
        let item = items.find(el => el.id === id)
        if (item) {
            return true
        } else {
            return false
        }
    }

    return (
        <Paper elevation={6}>
            <Box className={s.card} key={id}>
                <Box className={s.photoContainer}>
                    <Carousel images={photo}/>
                </Box>
                <Box className={s.footer}>
                    <Box className={s.footerWithHeader}>
                        <Typography variant={'h5'}>{brand}</Typography>
                        <Typography variant={'h6'}>{model}</Typography>
                    </Box>
                    <Box className={s.footerWithButton}>
                        <h3 style={{fontFamily: 'russian-regular, sans-serif'}}>{price} руб.</h3>
                        {isItemAdded()
                            ? <span
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    fontFamily: 'russian-regular, sans-serif'
                            }}>В Корзине<CheckIcon/></span>
                            : <Button className={s.btn}
                                      onClick={addToCartHandler}
                                      size='small'
                                      color={'inherit'}
                                      variant='contained'
                                      sx={{fontFamily: 'russian-regular, sans-serif'}}
                            >
                                В корзину
                            </Button>}
                    </Box>
                </Box>
            </Box>
        </Paper>
    );
};

export default SneakersItem;