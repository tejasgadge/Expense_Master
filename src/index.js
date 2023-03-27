import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import mystore from './redux/store';

const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <>
    <Provider store={mystore}>
        <App/>
    </Provider>
    </>
)