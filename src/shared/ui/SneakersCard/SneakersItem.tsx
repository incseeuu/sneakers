import React from 'react';
import {Box, Button, Paper} from "@mui/material";
import {Sneakers} from "../../../pages/Shop/ui/Shop";
import s from './style.module.css'
import Carousel from "../Carousel/Carousel";

type Props = {
    item: Sneakers
    addToCart: (item: Sneakers) => void
}

const SneakersItem = ({item, addToCart}: Props) => {

    const {id, brand, photo, model, price} = item

    return (
        <Paper elevation={6}>
            <Box className={s.card} key={id}>
                {/*<img src={photo} alt={'img'} className={s.photo}></img>*/}
                <Box className={s.photoContainer}>
                    <Carousel images={photo}/>
                </Box>
                <Box className={s.footer}>
                    <h2>{brand}</h2>
                    <h4>Модель: {model}</h4>
                    <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
                        <h3>Цена: {price}</h3>
                        <Button className={s.btn}
                                onClick={() => addToCart(item)}
                                size='small'
                                color={'inherit'}
                                variant='outlined'>
                            В корзину
                        </Button>
                    </div>
                </Box>
            </Box>
        </Paper>
    );
};

export default SneakersItem;