import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./app/store"

// Need this to integrate bootstrap within the project
import "bootstrap/dist/css/bootstrap.min.css";


import {ToastContainer} from "react-toastify";
// Need this to integrate toastify within the project
import "react-toastify/dist/ReactToastify.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
            <ToastContainer />
        </Provider>

    </React.StrictMode>
);


