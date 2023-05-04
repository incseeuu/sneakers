import React from 'react';
import s from "./styles.module.css";
import {Box, Collapse, Container, List, ListItemButton, ListItemIcon, ListItemText, Typography} from "@mui/material";
import {ExpandLess, ExpandMore} from "@mui/icons-material";
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

type LocalState = {
    id: number
    open: boolean
    question: string
    answer: string
}

const localState: LocalState[] = [
    {
        id: 1,
        open: false,
        question: 'Как выбрать правильный размер обуви?',
        answer: 'Размеры обуви могут различаться от производителя к производителю. Мы рекомендуем измерять длину стопы и сравнивать ее с таблицами размеров, которые мы предоставляем на нашем сайте.'
    },
    {
        id: 2,
        open: false,
        question: 'Как можно вернуть или обменять товар?',
        answer: 'Мы принимаем возвраты и обмены в течение 30 дней после покупки. Пожалуйста, свяжитесь с нами, чтобы получить инструкции.'
    },
    {
        id: 3,
        open: false,
        question: 'Как долго займет доставка?',
        answer: 'Мы стараемся отправлять заказы в течение 1-2 рабочих дней после получения заказа. Доставка может занять от 20 до 30 рабочих дней.'
    },
    {
        id: 4,
        open: false,
        question: 'Какая политика гарантии на обувь?',
        answer: 'Мы предоставляем гарантию на все наши товары. Если у вас возникнут проблемы с обувью, пожалуйста, свяжитесь с нами, чтобы получить помощь.'
    },
    {
        id: 5,
        open: false,
        question: 'Какой способ оплаты вы принимаете?',
        answer: 'На текущий момент оплатить можно при получении или же переводом на карту. Реквизиты мы вам сообщим после оформления заказа в корзине'
    },
]

const Questions = () => {

    const [open, setOpen] = React.useState(localState);

    const handleClick = (id: number) => {
        setOpen(open.map(el => el.id === id ? {...el, open: !el.open} : el))
    };

    return (
        <Container maxWidth="lg" className={s.container}>
            <Box className={s.content}>
                <Typography className={s.header} variant={'h4'}>Часто задаваемые вопросы</Typography>
                {open.map(el => {
                    return (
                        <Box key={el.id}>
                            <ListItemButton onClick={() => handleClick(el.id)} className={s.listItemButton}>
                                <ListItemIcon>
                                    <QuestionMarkIcon/>
                                </ListItemIcon>
                                <ListItemText>{el.question}</ListItemText>
                                {el.open ? <ExpandLess/> : <ExpandMore/>}
                            </ListItemButton>
                            <Collapse in={el.open} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton sx={{pl: 4}}>
                                        <ListItemText>{el.answer}</ListItemText>
                                    </ListItemButton>
                                </List>
                            </Collapse>
                        </Box>
                    )
                })}
            </Box>
        </Container>
    );
};

export default Questions;