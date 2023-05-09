import React from 'react';
import {Box, Typography} from "@mui/material";
import s from './style.module.css'

const NotFoundItems = () => {
    return (
        <Box className={s.container}>
            <Typography className={s.text} variant={'h2'}>Ничего не найдено🥺</Typography>
        </Box>
    );
};

export default NotFoundItems;