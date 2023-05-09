import {createHashRouter, Navigate} from 'react-router-dom'
import {AppLayout} from "./appLayout";
import Shop from "../pages/Shop/ui/Shop";
import Landing from "../pages/Landing/Landing";
import Cart from "../pages/cart/Cart";


export const appRouter = createHashRouter([
    {
        path: '/',
        element: <AppLayout />,
        // errorElement: <div>error</div>,
        children: [
            {
                path: '/cart',
                element: <Cart />,
            },
            {
                path: '/',
                element: <Landing />
            },
            {
                path: '/shop',
                element: <Shop/>
            },
        ],
    },
])