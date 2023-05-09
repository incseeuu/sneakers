import React, {useEffect} from 'react';
import {Box, Pagination} from "@mui/material";
import {useSelector} from "react-redux";
import {RootState} from "../../../app/store";
import {fetchSneakers, SneakersStateType} from "../../../entities/shop/model/sneakers";
import {useAppDispatch} from "../../../shared/hooks/useAppDispatch";
import {addItemToCart} from "../../../entities/cart/model/cart";
import s from './style.module.css'
import SneakersItem from "../../../shared/ui/SneakersCard/SneakersItem";
import Skeleton from "../../../shared/ui/Skeleton/Skeleton";
import {AppState} from "../../../app/store/app";
import Filters from "../../../shared/ui/Filters/Filters";
import {filteredState} from "../../../entities/shop/model/filtered-selector";
import NotFoundItems from "../../../shared/ui/NotFoundItems/NotFoundItems";



const Shop = () => {
    const sneackers = useSelector<RootState, SneakersStateType[]>(state => filteredState(state, state.filterReducer))
    const {isFetching} = useSelector<RootState, AppState>(state => state.appReducer)

    console.log(sneackers)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchSneakers())
    }, [])



    const addItemToCartHandler = (item: SneakersStateType) => {
        dispatch(addItemToCart(item))
    }

    return (
        <Box className={s.container}>
            <Filters/>
            <Box className={s.content}>
                <Pagination className={s.pagination} count={10} shape="rounded" />
                {isFetching || sneackers.length > 0
                    ? <Box className={s.cards}
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
                    : <NotFoundItems/>
                }
                <Pagination className={s.pagination} count={10} shape="rounded"/>
            </Box>
        </Box>
    );
};

export default Shop;