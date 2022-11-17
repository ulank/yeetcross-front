import React, {Component} from 'react';
import GoodList from "../shared/GoodList";

class ProductsPage extends Component {
    render() {
        return (
            <div>
                <div className='about'>
                    <h2 className='h2'>Products</h2>
                </div>

                <div className="products">
                    <div className="hits">
                        <div className="like"></div>
                        <div className="sneaker">
                            <img src='1.jpg'></img>
                        </div>
                        <p className="name">
                            Nike Mid Blazer Suede
                            <br></br>
                        </p>
                        <div className="cont">
                            <div className="type">
                                <p className="price">Price:</p>
                                <p className="value">49 990 ₸</p>
                            </div>
                            <div className="adder">
                                <button>+</button>
                            </div>
                        </div>
                    </div>
                    <div className="hits">
                        <div className="sneaker">
                            <img src='2.jpg'></img>
                        </div>
                        <p className="name">
                            Nike Air Max 270
                            <br></br>
                        </p>
                        <div className="cont">
                            <div className="type">
                                <p className="price">Price:</p>
                                <p className="value">69 990 ₸</p>
                            </div>
                            <div className="adder">
                                <button>+</button>
                            </div>
                        </div>
                    </div>
                    <div className="hits">
                        <div className="sneaker">
                            <img src='4.jpg'></img>
                        </div>
                        <p className="name">
                            Puma Future Rider
                            <br></br>
                        </p>
                        <div className="cont">
                            <div className="type">
                                <p className="price">Price:</p>
                                <p className="value">54 990 ₸</p>
                            </div>
                            <div className="adder">
                                <button>+</button>
                            </div>
                        </div>
                    </div>
                    <div className="hits">
                        <div className="sneaker">
                            <img src='5.jpg'></img>
                        </div>
                        <p className="name">
                            Under Armour Curry 8
                            <br></br>
                        </p>
                        <div className="cont">
                            <div className="type">
                                <p className="price">Price:</p>
                                <p className="value">54 990 ₸</p>
                            </div>
                            <div className="adder">
                                <button>+</button>
                            </div>
                        </div>
                    </div>
                    <div className="hits">
                        <div className="sneaker">
                            <img src='9.jpg'></img>
                        </div>
                        <p className="name">
                            Nike Lebron XVIII Low
                            <br></br>
                        </p>
                        <div className="cont">
                            <div className="type">
                                <p className="price">Price:</p>
                                <p className="value">59 990 ₸</p>
                            </div>
                            <div className="adder">
                                <button>+</button>
                            </div>
                        </div>
                    </div>
                    <div className="hits">
                        <div className="sneaker">
                            <img src='6.jpg'></img>
                        </div>
                        <p className="name">
                            Nike Kyrie 7
                            <br></br>
                        </p>
                        <div className="cont">
                            <div className="type">
                                <p className="price">Price:</p>
                                <p className="value">44 990 ₸</p>
                            </div>
                            <div className="adder">
                                <button>+</button>
                            </div>
                        </div>
                    </div>
                    <div className="hits">
                        <div className="sneaker">
                            <img src='3.jpg'></img>
                        </div>
                        <p className="name">
                            Nike Mid Blazer Limited
                            <br></br>
                        </p>
                        <div className="cont">
                            <div className="type">
                                <p className="price">Price:</p>
                                <p className="value">79 990 ₸</p>
                            </div>
                            <div className="adder">
                                <button>+</button>
                            </div>
                        </div>
                    </div>
                    <div className="hits">
                        <div className="sneaker">
                            <img src='7.jpg'></img>
                        </div>
                        <p className="name">
                            Nike Air Jordan 11
                            <br></br>
                        </p>
                        <div className="cont">
                            <div className="type">
                                <p className="price">Price:</p>
                                <p className="value">59 990 ₸</p>
                            </div>
                            <div className="adder">
                                <button>+</button>
                            </div>
                        </div>
                    </div>
                    <div className="hits">
                        <div className="sneaker">
                            <img src='8.jpg'></img>
                        </div>
                        <p className="name">
                            Nike Lebron XVIII
                            <br></br>
                        </p>
                        <div className="cont">
                            <div className="type">
                                <p className="price">Price:</p>
                                <p className="value">54 990 ₸</p>
                            </div>
                            <div className="adder">
                                <button>+</button>
                            </div>
                        </div>
                    </div>
                </div>
                <GoodList/>
            </div>
        );
    }
}

export default ProductsPage;
