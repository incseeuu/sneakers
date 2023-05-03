import React from 'react';
import {Box, Container, ListItemButton, ListItemIcon, ListItemText, Typography} from "@mui/material";
import s from './styles.module.css'
import DoneIcon from '@mui/icons-material/Done';
import foot from '../../assets/foot.png'
import sizes from '../../assets/sizes.png'

const FootSize = () => {
    return (
        <Container maxWidth="xl" className={s.container}>
            <Box className={s.content}>
                <Typography className={s.header} variant={'h4'}>Как определить размер обуви?</Typography>
                <ListItemButton className={s.listItem}>
                    <ListItemIcon>
                        <DoneIcon/>
                    </ListItemIcon>
                    <ListItemText>Положите <b>на пол лист</b> белой бумаги. Одной ногой встаньте на лист таким образом, чтобы
                        стопа <b>целиком</b> помещалась на листе.</ListItemText>
                </ListItemButton >
                <ListItemButton className={s.listItem}>
                    <ListItemIcon>
                        <DoneIcon/>
                    </ListItemIcon>
                    <ListItemText>Длина стопы измеряется от <b>самой выступающей точки пятки</b> до конца первого или второго
                        пальца <b>(наиболее длинного)</b>.</ListItemText>
                </ListItemButton>
                <ListItemButton className={s.listItem}>
                    <ListItemIcon>
                        <DoneIcon/>
                    </ListItemIcon>
                    <ListItemText>Для удобства и точности измерений можно использовать угольник или встать одной ногой
                        внутрь обувной коробки.</ListItemText>
                </ListItemButton>
                <ListItemButton className={s.listItem}>
                    <ListItemIcon>
                        <DoneIcon/>
                    </ListItemIcon>
                    <ListItemText>Карандашом поставьте на листе отметки, которые являются проекциями <b>самой выступающей
                        точки пятки</b> и конца первого или второго пальца на плоскость листа бумаги.</ListItemText>
                </ListItemButton>
                <ListItemButton className={s.listItem}>
                    <ListItemIcon>
                        <DoneIcon/>
                    </ListItemIcon>
                    <ListItemText>Полученные отметки <b>соедините и измерьте линейкой</b>. Полученная величина в сантиметрах —
                        длина вашей стопы.</ListItemText>
                </ListItemButton>
                <img className={s.img} src={foot} alt={'img'}/>
                <ListItemButton className={s.listItem}>
                    <ListItemIcon>
                        <DoneIcon/>
                    </ListItemIcon>
                    <ListItemText>Сравните результаты по таблице размерных сеток.</ListItemText>
                </ListItemButton>
                <img src={sizes} className={s.img} alt={'img'}/>
            </Box>
        </Container>
    );
};

export default FootSize;