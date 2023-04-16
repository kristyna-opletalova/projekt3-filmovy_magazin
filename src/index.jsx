import React from 'react';
import {createRoot} from 'react-dom/client';
import './style.css';
import Header from "./pages/Header";
import Home from "./pages/Home";

const App = () => {
    return (
        <div className="container">
            <Header/>
            <Home/>
        </div>
    );
};

createRoot(
    document.querySelector('#app'),
).render(<App/>);
