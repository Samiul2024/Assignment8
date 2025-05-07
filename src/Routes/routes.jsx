import { createBrowserRouter } from "react-router";

import Home from "../Pages/Home";
import MainLayout from "../layouts/MainLayout";
import Favourites from "../Pages/Favourites";
import About from "../Pages/About";
import PhoneDetails from "../Pages/PhoneDetails";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        errorElement: <ErrorPage />,
        children: [
            {
                // index: true,
                path: '/',

                element: <Home />,
                hydrateFallbackElement:<p>Loading lawers , Please wait.....</p>,
                loader: () => fetch('../lawers.json'),
            },
            {
                path: '/favourites',
                element:
                    <Favourites />,
                // <p>Favourite items</p>
            },
            {
                path: '/about',
                element: <About />,
            },

            {
                path: '/phone-details/:id',
                element: <PhoneDetails />,
                hydrateFallbackElement:<p>Loading Lawer details , Please wait.....</p>,

                loader: () => fetch('../lawers.json'),

            },
        ],
    },

])

export default router