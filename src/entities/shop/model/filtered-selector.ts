import {useSelector} from "react-redux";
import {RootState} from "../../../app/store";
import {FilterState} from "./filters";

export const filteredState = (state: RootState, filter: FilterState) => {
    const {mainFilters, price} = filter
    const afterGenderFilter = state.sneakersReducer.filter(el => mainFilters.includes(el.gender))
    const afterBrandFilter = afterGenderFilter.filter(el => {
        if (mainFilters.includes('other')) {
            return mainFilters.includes(el.brand) || el.other
        } else {
            return mainFilters.includes(el.brand)
        }
    })
    const afterPriceFilter = afterBrandFilter.filter(el => el.price >= price[0] && el.price <= price[1])

    return afterPriceFilter
}