import React, {Component} from 'react';
import ProductsPage from "./page/ProductsPage";

class Main extends Component {
    render() {
        return (
            <main className="main-container">
                {/*
                Nursat component
                <HomePage/>
                */}

                {/*
                Ulan component
                <ProductsPage/>
                */}

                <ProductsPage/>

                {/*
                Jaras component
                <AboutPage/>
                */}
            </main>
        );
    }
}

export default Main;
