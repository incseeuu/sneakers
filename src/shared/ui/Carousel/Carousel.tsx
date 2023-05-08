import React, { useState } from 'react';
import { motion } from 'framer-motion';
import s from './style.module.css';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';


type CarouselProps = {
    images: string[];
};

const Carousel: React.FC<CarouselProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const variants = {
        enter: (direction: number) => {
            return {
                opacity: 0,
            };
        },
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => {
            return {
                zIndex: 0,
                opacity: 0,
            };
        },
    };

    return (
        <div className={s.carousel}>
            <button className={s.prev} onClick={handlePrev}>
                <KeyboardArrowLeftIcon/>
            </button>
            <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                alt="Carousel Image"
                custom={currentIndex > 0 ? 1 : -1}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ ease: 'easeInOut', duration: 0.5 }}
            />
            <button className={s.next} onClick={handleNext}>
                <KeyboardArrowRightIcon />
            </button>
        </div>
    );
};

export default Carousel;
