import React from 'react';
import {Box, Button, Typography} from '@mui/material';
import sample from '../../assets/bgvideo.mp4';
import {motion} from "framer-motion";
import {Link} from 'react-scroll'
import FootSize from "../../widgets/FootSize/FootSize";
import Questions from "../../widgets/Questions/Questions";
import s from './style.module.css'
import TypeWritter from "../../shared/ui/TypeWritter/TypeWritter";
import {useNavigate} from "react-router-dom";

const Landing = () => {

    const navigate = useNavigate()

    const onNavigateToShopHandler = () => {
        navigate('/shop')
    }

    return (

        <Box>

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
                    <video autoPlay loop muted style={{minWidth: '100%', minHeight: '100%'}}>
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
                        <TypeWritter/>
                    </motion.div>
                    <motion.div
                        initial={{x: -300}}
                        animate={{x: 0}}
                        exit={{opacity: 0, transition: {duration: 0.2}}}
                        transition={{duration: 1}}
                    >
                        <Typography className={s.header} variant="h5">Мы сотрудничаем напрямую с производителями из
                            Китая.</Typography>
                        <Typography className={s.headerTwo} variant="h6">У нас лучшее качество в регионе.
                        </Typography>
                    </motion.div>

                </Box>
                <Button
                    onClick={onNavigateToShopHandler}
                    sx={{
                        fontFamily: 'myFont, sans-serif',
                        color: 'white',
                        border: '1px white solid',
                        borderRadius: '0',
                        textTransform: 'none'
                    }}>
                    Освежить свой стиль
                </Button>

            </Box>
            <Link

                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
            >
                <hr id='section1' style={{marginTop: '3rem', marginBottom: '3rem', opacity: '0.5'}}></hr>
            </Link>
            <FootSize/>
            <Link

                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1500}
            >
                <hr id='section2' style={{marginTop: '3rem', marginBottom: '3rem', opacity: '0.5'}}></hr>
            </Link>
            <Questions/>
        </Box>


    );
};

export default Landing;