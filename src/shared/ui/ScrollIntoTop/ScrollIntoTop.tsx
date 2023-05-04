import React, {useEffect, useState} from 'react';
import {Button} from "@mui/material";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Проверка, сколько пользователь прокрутил страницу
    const handleScroll = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // При монтировании компонента добавляем обработчик прокрутки
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // При нажатии кнопки прокручиваем пользователя вверх страницы
    const scrollToTop = () => {

        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <Button style={{
            display: `${!isVisible ? 'none' : ''}`,
            position: 'fixed',
            bottom: '5rem',
            right: '5rem',
            textTransform: 'none',
            borderRadius: 0,
            backgroundColor: 'white'
        }}
                size={'medium'}
                color={ 'inherit'}
                variant={'outlined'}
                onClick={scrollToTop}>
            На верх
        </Button>
    );
};

export default ScrollToTop;