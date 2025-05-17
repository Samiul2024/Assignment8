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
                hydrateFallbackElement: <h1 className="text-3xl text-center bg-amber-500 px-8">Loading lawers , Please wait.....</h1>,
                loader: () => fetch('../lawers.json'),
            },
            {
                path: '/bookings',
                element:
                    <Favourites />,
                // <p>Favourite items</p>
                hydrateFallbackElement: <h1 className="text-3xl text-center bg-amber-500 px-8">Loading Appointment details , Please wait.....</h1>,
                loader: () => fetch('../lawers.json'),

            },
            {
                path: '/blogs',
                element: <About />,
                hydrateFallbackElement: <h1 className="text-3xl text-center bg-amber-500 px-8">Loading Lawer details , Please wait.....</h1>,
                loader: () => fetch('../lawers.json'),
            },

            {
                path: '/lawyer-details/:id',
                element: <PhoneDetails />,
                hydrateFallbackElement: <h1 className="text-3xl text-center bg-amber-500 px-8">Loading Lawer details , Please wait.....</h1>,

                loader: () => fetch('../lawers.json'),

            },
        ],
    },

])

export default router