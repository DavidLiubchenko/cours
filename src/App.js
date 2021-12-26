import React from 'react';
// import Main from "./Main.jsx"
import "./App.css"
import {  Route, Routes } from 'react-router-dom';
import FirstRouter from './Routers/FirstRouter';
import SecRouter from './Routers/SecRouter';
import ThirdRouter from './Routers/ThirdRouter';
import Navigation from './Navigation';

const App = () => {

    return (
        
            <div className='fullPage'>
                <header id="mainHeader">Header</header>
                <Navigation />
                <Routes>
                    <Route path="/first" element={<FirstRouter/>} />
                    <Route path="/second" element={<SecRouter/>} />
                    <Route path="/third" element={<ThirdRouter/>} />
                </Routes>
            </div>
       

    );
}

export default App;
