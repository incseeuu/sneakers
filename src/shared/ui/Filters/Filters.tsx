import React, {ChangeEvent} from 'react';
import s from "./styles.module.css"
import {
    Accordion,
    AccordionDetails,
    AccordionSummary, alpha, Box, Button, FilledInput, FormControl, InputAdornment, InputLabel,
    List,
    ListItem,
    ListItemText, styled,
    Switch,
    Typography
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckIcon from "@mui/icons-material/Check";
import {changeMainFilters, changePrice, FilterState} from "../../../entities/shop/model/filters";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {useSelector} from "react-redux";
import {RootState} from "../../../app/store";

const DarkSwitch = styled(Switch)(({theme}) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
        color: '#3e4d57',
        '&:hover': {
            backgroundColor: alpha('#3e4d57', theme.palette.action.hoverOpacity),
        },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
        backgroundColor: '#3e4d57',
    },
}));

const Filters = () => {

    const [minPrice, setMinPrice] = React.useState<number>(0)
    const [maxPrice, setMaxPrice] = React.useState<number>(0)

    const {mainFilters} = useSelector<RootState, FilterState>(state => state.filterReducer)

    const dispatch = useAppDispatch()

    const onSubmitPrice = () => {
        if (maxPrice <= 0) {
            dispatch(changePrice([minPrice, 99999]))
        } else {
            dispatch(changePrice([minPrice, maxPrice]))
        }
    }
    const onClearPrice = () => {
        setMaxPrice(0)
        setMinPrice(0)
        dispatch(changePrice([0, 99999]))
    }

    const checkCorrectValueOfInputs = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const {key} = event;

        if (!/[0-9]/.test(key) && key !== 'Backspace') {
            event.preventDefault();
        }
    };

    const onChangeMinPrice = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setMinPrice(+e.currentTarget.value)
    }
    const onChangeMaxPrice = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setMaxPrice(+e.currentTarget.value)
    }

    const handleToggle = (value: string) => () => {
        dispatch(changeMainFilters(value))
    };

    return (
        <Box className={s.filters}>
            <Accordion className={s.accordion}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1a-content"
                    sx={{backgroundColor: '#fafafa'}}
                >
                    <Typography className={s.filterCategory}>Пол</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{backgroundColor: '#fafafa'}}>
                    <List
                        sx={{width: '100%', maxWidth: 360, bgcolor: '#fafafa'}}
                    >
                        <ListItem>

                            <ListItemText primary={
                                <Typography sx={{fontFamily: 'russian-medium, sans-serif'}}>Мужские</Typography>
                            }/>
                            <DarkSwitch
                                edge="end"
                                onChange={handleToggle('male')}
                                checked={mainFilters.indexOf('male') !== -1}
                            />
                        </ListItem>
                        <ListItem>

                            <ListItemText primary={
                                <Typography sx={{fontFamily: 'russian-medium, sans-serif'}}>Женские</Typography>
                            }/>
                            <DarkSwitch
                                edge="end"
                                onChange={handleToggle('female')}
                                checked={mainFilters.indexOf('female') !== -1}
                                color={'default'}
                            />
                        </ListItem>
                    </List>
                </AccordionDetails>
            </Accordion>
            <Accordion className={s.accordion}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    sx={{backgroundColor: '#fafafa'}}
                >
                    <Typography className={s.filterCategory}>Бренд</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{backgroundColor: '#fafafa'}}>
                    <List
                        sx={{
                            width: '100%',
                            maxWidth: 360,
                            bgcolor: '#fafafa',
                        }}
                    >
                        <ListItem>

                            <ListItemText primary={
                                <Typography sx={{fontFamily: 'Kanit, sans-serif'}}>Nike</Typography>
                            }/>
                            <DarkSwitch
                                edge="end"
                                onChange={handleToggle('nike')}
                                checked={mainFilters.indexOf('nike') !== -1}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary={
                                <Typography sx={{fontFamily: 'Kanit, sans-serif'}}>Adidas</Typography>
                            }/>
                            <DarkSwitch
                                edge="end"
                                onChange={handleToggle('adidas')}
                                checked={mainFilters.indexOf('adidas') !== -1}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary={
                                <Typography sx={{fontFamily: 'Kanit, sans-serif'}}>New Balance</Typography>
                            }/>
                            <DarkSwitch
                                edge="end"
                                onChange={handleToggle('new balance')}
                                checked={mainFilters.indexOf('new balance') !== -1}

                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary={
                                <Typography sx={{fontFamily: 'Kanit, sans-serif'}}>Puma</Typography>
                            }/>
                            <DarkSwitch
                                edge="end"
                                onChange={handleToggle('puma')}
                                checked={mainFilters.indexOf('puma') !== -1}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary={
                                <Typography sx={{fontFamily: 'Kanit, sans-serif'}}>Other</Typography>
                            }/>
                            <DarkSwitch
                                edge="end"
                                onChange={handleToggle('other')}
                                checked={mainFilters.indexOf('other') !== -1}
                            />
                        </ListItem>
                    </List>
                </AccordionDetails>
            </Accordion>
            <Accordion className={s.accordion}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    sx={{backgroundColor: '#fafafa'}}
                >
                    <Typography className={s.filterCategory}>Цена</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{backgroundColor: '#fafafa'}}>
                    <List
                        sx={{
                            width: '100%',
                            maxWidth: 360,
                            bgcolor: '#fafafa',
                            position: 'relative',
                            paddingBottom: '2rem'
                        }}
                    >
                        <ListItem className={s.filterItem}>
                            <FormControl sx={{m: 1, width: '25ch'}} variant="filled">
                                <InputLabel sx={{color: '#3e4d57 !important'}}>От</InputLabel>
                                <FilledInput
                                    value={minPrice !== 0 ? minPrice : ''}
                                    onChange={onChangeMinPrice}
                                    onKeyDown={checkCorrectValueOfInputs}
                                    classes={s.inputPrice}
                                    endAdornment={<InputAdornment position="end">руб.</InputAdornment>}
                                />
                            </FormControl>
                        </ListItem>
                        <ListItem>
                            <FormControl sx={{m: 1, width: '25ch'}} variant="filled">
                                <InputLabel sx={{color: '#3e4d57 !important'}}>До</InputLabel>
                                <FilledInput
                                    value={maxPrice !== 0 ? maxPrice : ''}
                                    onChange={onChangeMaxPrice}
                                    onKeyDown={checkCorrectValueOfInputs}
                                    color={'primary'}
                                    endAdornment={<InputAdornment position="end">руб.</InputAdornment>}
                                />
                            </FormControl>
                        </ListItem>
                        <Box className={s.btnBox}>
                            <Button className={s.btn}
                                    onClick={onSubmitPrice}
                                    size='small'
                                    color={'inherit'}
                                    variant='contained'>
                                <CheckIcon/>
                            </Button>
                            <Button
                                className={s.btn}
                                onClick={onClearPrice}
                                size='small'
                                color={'inherit'}
                                variant='contained'>
                                Очистить
                            </Button>
                        </Box>
                    </List>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
};

export default Filters;