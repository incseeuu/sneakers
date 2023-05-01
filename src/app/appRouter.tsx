import {createBrowserRouter} from 'react-router-dom'
import {AppLayout} from "./appLayout";
import Shop from "../pages/Shop/ui/Shop";
import Landing from "../pages/Landing/Landing";


export const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <div>error</div>,
        children: [
            {
                path: '/login',
                element: <div>login</div>,
            },
            {
                path: '/category',
                element: <div>category</div>,
            },
            {
                path: '/',
                element: <Landing />
            },
            {
                path: '/shop',
                element: <Shop/>
            }
        ],
    },
])