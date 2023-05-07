import Typography from '@mui/material/Typography';
import React from 'react';
import {Cursor, useTypewriter} from "react-simple-typewriter";
import s from './style.module.css'


const TypeWritter = () => {

    const [text, count] = useTypewriter({
        words: ["Welcome!",
            "Добро пожаловать!",
            "Bienvenue!",
            "Willkommen!",
            "Benvenuto!",
            "ようこそ",
            "환영합니다",
            "Bienvenido"],
        loop: true,
        typeSpeed: 100,
        delaySpeed: 3000,
    })

    return (
        <Typography className={s.activeHeader} variant="h3">
            {text}
            <Cursor cursorColor='#bbb' cursorBlinking={true}/>
        </Typography>
    );
};

export default TypeWritter;