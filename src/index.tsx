import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import {createGlobalStyle, ThemeProvider} from "styled-components";
import {BrowserRouter} from 'react-router-dom';
import {AppStyled} from './styled-components/AppStyled';
import {Provider} from 'react-redux';
import {store} from './bll/Store';

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }`
const theme = {
    colors: {
        dark: "black",
        light: 'white'
    }
}

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    // <React.StrictMode>

    <>
        <BrowserRouter>
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <Global/>
                    <App/>
                </ThemeProvider>
            </Provider>
        </BrowserRouter>
    </>
    // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
