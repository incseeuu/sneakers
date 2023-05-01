import React from 'react';
import {Box, Typography} from "@mui/material";

const Footer = () => {
    return (
        <Box display={'flex'} justifyContent={'space-around'}>
            <Box>

                <Typography variant='inherit'>©2023 All rights reserved</Typography>
            </Box>
            <Box>
                <Typography variant='inherit'>Связаться с нами:</Typography>
            </Box>
        </Box>
    );
};

export default Footer;