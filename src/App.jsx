import './App.css';
import Header from "./components/Header";
import { Routes, Route } from 'react-router-dom'
import ProductsPage from "./components/page/ProductsPage";
import HomePage from "./components/page/HomePage";
import AboutPage from "./components/page/AboutPage";
import NotFoundPage from "./components/page/NotFoundPage";


function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path='/' element={<HomePage />}/>
                <Route path='/products' element={<ProductsPage />} />
                <Route path='/about' element={<AboutPage />} />
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
        </>
    );
}

export default App;
