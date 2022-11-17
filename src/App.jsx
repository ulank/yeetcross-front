import './App.css';
import Header from "./components/Header";
import {Routes, Route} from 'react-router-dom'
import ProductsPage from "./components/page/ProductsPage";
import HomePage from "./components/page/HomePage";
import AboutPage from "./components/page/AboutPage";
import NotFoundPage from "./components/page/NotFoundPage";
import LoginPage from "./components/page/LoginPage";
import RegisterPage from "./components/page/RegisterPage";
import {useState} from "react";


function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/products' element={<ProductsPage/>}/>
                <Route path='/about' element={<AboutPage/>}/>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/register' element={<RegisterPage/>}/>
                <Route path='*' element={<NotFoundPage/>}/>
            </Routes>
        </>
    );
}

export default App;
