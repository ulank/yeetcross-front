import React, {Component} from 'react';
import GoodList from "../shared/GoodList";

class ProductsPage extends Component {
    render() {
        return (
            <div>
                <div className='about'>
                    <h2 className='h2'>Products</h2>
                </div>
                <GoodList/>
            </div>
        );
    }
}

export default ProductsPage;
