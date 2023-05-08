import React from 'react';
import {Box, Typography} from "@mui/material";
import s from './style.module.css'
import {ReactComponent as Instagram} from '../../../assets/instagram.svg'
import {ReactComponent as Vk} from '../../../assets/vk.svg'
import {ReactComponent as Telegram} from '../../../assets/telegram.svg'
import logo from '../../../assets/whitelogo.png'

const Footer = () => {
    return (
        <Box className={s.container}>
            <Box className={s.content}>
                <Box>
                    <Typography className={s.contactUs} variant='inherit'>Связаться с нами:</Typography>
                    <Typography className={s.phonenumber} variant='inherit'>+7 959 111 11 11</Typography>
                    <Box className={s.icons}>
                        <a href={'#'} target={"_blank"}>
                            <Instagram/>
                        </a>
                        <a href={'#'} target={"_blank"}>
                            <Vk/>
                        </a>
                        <a href={'#'} target={"_blank"}>
                            <Telegram/>
                        </a>
                    </Box>
                </Box>
                <Box className={s.logoContainer}>
                    <img className={s.logo} src={logo} alt={'logo'}/>
                    <Typography className={s.rigths} variant='inherit'>©2023 All rights reserved</Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;