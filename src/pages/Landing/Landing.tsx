import React from 'react';
import {Box, Button, Typography} from '@mui/material';
import sample from '../../assets/bgvideo.mp4';
import {Cursor, useTypewriter} from "react-simple-typewriter";
import {motion} from "framer-motion";

const Landing = () => {


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
        delaySpeed: 3000
    })

    return (

        <Box position="relative" display="flex" alignItems="center" justifyContent="space-around" height='90vh'>
            <Box
                position="absolute"
                top={0}
                left={0}
                width="100%"
                height="100%"
                overflow="hidden"
                zIndex={-1}
            >
                <video className="videoTag" autoPlay loop muted style={{minWidth: '100%', minHeight: '100%'}}>
                    <source src={sample} type="video/mp4"/>
                </video>
            </Box>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="start"
                gap="10px"
                padding="20px"
            >
                <motion.div
                    initial={{x: 300}}
                    animate={{x: 0}}
                    exit={{opacity: 0, transition: {duration: 0.2}}}
                    transition={{duration: 1}}
                >
                    <Typography variant="h3" color='white' sx={{fontFamily: 'Ubuntu', fontWeight: 'bold'}}>
                        {text}
                        <Cursor cursorColor='#bbb' cursorBlinking={true}/>
                    </Typography>
                </motion.div>
                <motion.div
                    initial={{x: -300}}
                    animate={{x: 0}}
                    exit={{opacity: 0, transition: {duration: 0.2}}}
                    transition={{duration: 1}}
                >
                    <Typography variant="h5" color='white'>Мы сотрудничаем напрямую с производителями из
                        Китая</Typography>
                    <Typography variant="h6" color='white'>У нас лучшее качество в регионе :)
                    </Typography>
                </motion.div>

            </Box>
                <Button sx={{color: 'white', border: '1px white solid', borderRadius: '0', textTransform: 'none'}}>
                    Освежить свой стиль
                </Button>
        </Box>


    );
};

export default Landing;