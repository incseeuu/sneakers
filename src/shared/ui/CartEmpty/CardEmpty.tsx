import React from 'react';
import s from "../NotFoundItems/style.module.css";
import {Box, Typography} from "@mui/material";

const CardEmpty = () => {
    return (
        <Box className={s.container}>
            <Typography className={s.text} variant={'h2'}>Корзина пуста🥺</Typography>
        </Box>
    );
};

export default CardEmpty;