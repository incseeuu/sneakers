import {createRoot} from "react-dom/client";
import './index.css'
import {Provider} from "react-redux";
import {store} from "./app/store";
import {RouterProvider} from "react-router-dom";
import {appRouter} from "./app/appRouter";

const root = document.getElementById('root') as HTMLElement


createRoot(root).render(
    <Provider store={store}>
        <RouterProvider router={appRouter} />
    </Provider>
)