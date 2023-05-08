import React, {ChangeEvent, useEffect} from 'react';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Button,
    FilledInput,
    FormControl,
    InputAdornment,
    InputLabel,
    List,
    ListItem,
    ListItemText,
    Pagination,
    Switch,
    Typography
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {useSelector} from "react-redux";
import {RootState} from "../../../app/store";
import {fetchSneakers} from "../../../entities/shop/model/sneakers";
import {useAppDispatch} from "../../../shared/hooks/useAppDispatch";
import {addItemToCart} from "../../../entities/cart/model/cart";
import s from './style.module.css'
import SneakersItem from "../../../shared/ui/SneakersCard/SneakersItem";
import Skeleton from "../../../shared/ui/Skeleton/Skeleton";
import {AppState} from "../../../app/store/app";
import {changeMainFilters, changePrice, FilterState} from "../../../entities/shop/model/filters";
import CheckIcon from '@mui/icons-material/Check';


export type Sneakers = {
    id: number
    brand: string
    photo: string[]
    model: string
    price: number
    gender: string
    count: number
}

const Shop = () => {

    const [minPrice, setMinPrice] = React.useState<number>(0)
    const [maxPrice, setMaxPrice] = React.useState<number>(0)

    const sneackers = useSelector<RootState, Sneakers[]>(state => state.sneakersReducer)
    const {isFetching} = useSelector<RootState, AppState>(state => state.appReducer)
    const {mainFilters} = useSelector<RootState, FilterState>(state => state.filterReducer)


    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchSneakers())
    }, [])

    const onSubmitPrice = () => {
        dispatch(changePrice([minPrice, maxPrice]))
    }

    const checkCorrectValueOfInputs = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const { key } = event;

        // Allow only numeric input or backspace
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

    const addItemToCartHandler = (item: Sneakers) => {
        dispatch(addItemToCart(item))
    }

    return (
        <Box className={s.container}>
            <Box className={s.filters}>
                <Accordion className={s.accordion}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={s.filterCategory}>Пол</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <List
                            sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}
                        >
                            <ListItem>

                                <ListItemText id="switch-list-label-wifi" primary={
                                    <Typography sx={{fontFamily: 'russian-medium, sans-serif'}}>Мужские</Typography>
                                }/>
                                <Switch
                                    edge="end"
                                    onChange={handleToggle('male')}
                                    checked={mainFilters.indexOf('male') !== -1}
                                    inputProps={{
                                        'aria-labelledby': 'switch-list-label-wifi',
                                    }}
                                />
                            </ListItem>
                            <ListItem>

                                <ListItemText id="switch-list-label-bluetooth" primary={
                                    <Typography sx={{fontFamily: 'russian-medium, sans-serif'}}>Женские</Typography>
                                }/>
                                <Switch
                                    edge="end"
                                    onChange={handleToggle('female')}
                                    checked={mainFilters.indexOf('female') !== -1}
                                    inputProps={{
                                        'aria-labelledby': 'switch-list-label-bluetooth',
                                    }}
                                />
                            </ListItem>
                        </List>
                    </AccordionDetails>
                </Accordion>
                <Accordion className={s.accordion}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={s.filterCategory}>Бренд</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <List
                            sx={{
                                width: '100%',
                                maxWidth: 360,
                                bgcolor: 'background.paper',
                            }}
                        >
                            <ListItem>

                                <ListItemText id="switch-list-label-wifi" primary={
                                    <Typography sx={{fontFamily: 'Kanit, sans-serif'}}>Nike</Typography>
                                }/>
                                <Switch
                                    edge="end"
                                    onChange={handleToggle('nike')}
                                    checked={mainFilters.indexOf('nike') !== -1}
                                    inputProps={{
                                        'aria-labelledby': 'switch-list-label-wifi',
                                    }}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary={
                                    <Typography sx={{fontFamily: 'Kanit, sans-serif'}}>Adidas</Typography>
                                }/>
                                <Switch
                                    edge="end"
                                    onChange={handleToggle('adidas')}
                                    checked={mainFilters.indexOf('adidas') !== -1}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary={
                                    <Typography sx={{fontFamily: 'Kanit, sans-serif'}}>New Balance</Typography>
                                }/>
                                <Switch
                                    edge="end"
                                    onChange={handleToggle('newBalance')}
                                    checked={mainFilters.indexOf('newBalance') !== -1}

                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText  primary={
                                    <Typography sx={{fontFamily: 'Kanit, sans-serif'}}>Puma</Typography>
                                }/>
                                <Switch
                                    edge="end"
                                    onChange={handleToggle('puma')}
                                    checked={mainFilters.indexOf('puma') !== -1}
                                />
                            </ListItem>
                        </List>
                    </AccordionDetails>
                </Accordion>
                <Accordion className={s.accordion}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={s.filterCategory}>Цена</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <List
                            sx={{
                                width: '100%',
                                maxWidth: 360,
                                bgcolor: 'background.paper',
                                position: 'relative',
                                paddingBottom: '2rem'
                            }}
                        >
                            <ListItem className={s.filterItem}>
                                <FormControl sx={{m: 1, width: '25ch'}} variant="filled">
                                    <InputLabel>От</InputLabel>
                                    <FilledInput
                                        value={minPrice !== 0 ? minPrice : ''}
                                        onChange={onChangeMinPrice}
                                        onKeyDown={checkCorrectValueOfInputs}
                                        endAdornment={<InputAdornment position="end">руб</InputAdornment>}
                                    />
                                </FormControl>
                            </ListItem>
                            <ListItem>
                                <FormControl sx={{m: 1, width: '25ch'}} variant="filled">
                                    <InputLabel>До</InputLabel>
                                    <FilledInput
                                        value={maxPrice !== 0 ? maxPrice : ''}
                                        onChange={onChangeMaxPrice}
                                        onKeyDown={checkCorrectValueOfInputs}
                                        endAdornment={<InputAdornment position="end">руб</InputAdornment>}
                                    />
                                </FormControl>
                            </ListItem>
                            <Button className={s.btn}
                                    onClick={onSubmitPrice}
                                    size='small'
                                    color={'inherit'}
                                    variant='contained'>
                                <CheckIcon/>
                            </Button>
                        </List>
                    </AccordionDetails>
                </Accordion>
            </Box>
            <Box className={s.content}>
                <Pagination className={s.pagination} count={10} shape="rounded" />
                <Box className={s.cards}
                >
                    {isFetching
                        ? [...new Array(8)].map((_, i) => <div key={i}><Skeleton/></div>)
                        : sneackers.map((el, i) => {
                            return (<SneakersItem
                                    key={i}
                                    item={el}
                                    addToCart={addItemToCartHandler}/>
                            )
                        })}
                </Box>
                <Pagination className={s.pagination} count={10} shape="rounded"/>
            </Box>
        </Box>
    );
};

export default Shop;