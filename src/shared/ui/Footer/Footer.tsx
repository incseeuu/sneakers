import React from 'react';
import {Box, Typography} from "@mui/material";
import s from './style.module.css'

const Footer = () => {
    return (
        <Box className={s.container}>
            <Box className={s.content}>
                <Box>
                    <Typography variant='inherit'>Связаться с нами:</Typography>
                    <Box className={s.icons}>
                    </Box>
                </Box>
                <Typography variant='inherit'>©2023 All rights reserved</Typography>
            </Box>
        </Box>
    );
};

export default Footer;