import React from 'react';
import {createRoot} from 'react-dom/client';
import './style.css';
import Menu from "./components/Menu";
import Home from "./pages/Home";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import Reviews from "./pages/Reviews";
import Articles from "./pages/Articles";
import Movies from "./pages/Movies";
import Movie from "./components/Movie";
import ErrorPage from "./pages/Error";

const App = () => {
    return (
        <div className="container">
            <Menu/>
            <Outlet/>
        </div>
    );
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/reviews",
                element: <Reviews/>
            },
            {
                path: "/articles",
                element: <Articles/>
            },
            {
                path: "/movies",
                element: <Movies/>,
                children: [
                    {
                        path: "/movies/:movieId",
                        element: <Movie/>
                    }
                ]
            }
        ]
    }
]);

createRoot(
    document.querySelector('#app'),
).render(<RouterProvider router={router}/>);
