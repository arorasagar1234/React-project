import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Since the react version is 18 we have to create root and then render.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
