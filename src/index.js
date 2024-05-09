import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import ChatList from './components/ChatList';  // Import the ChatList which uses Chat components


const root = ReactDOM.createRoot(document.getElementById('root'));  // Ensure your HTML has a div with id="root"

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
