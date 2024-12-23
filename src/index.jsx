import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

function handleContextMenu(event){
    event.preventDefault();

}
// document.addEventListener('contextmenu',handleContextMenu)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
    <App/>    
    // </React.StrictMode>
);
