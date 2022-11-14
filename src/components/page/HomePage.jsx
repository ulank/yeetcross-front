import React, {Component} from 'react';

class HomePage extends Component {
    render() {
        return (
            <div>
                <div className="content-1">
                    <div className="block-1">
                        <img src='puma-ad.png'></img>
                    </div>
                    <div className="block-2">
                        <p>
                            Puma x Aka Boku
                        </p>

                        <button>
                            BUY NOW!
                        </button>
                    </div>
                </div>
                 <div className="content-2">
                    <p>
                        SALES HITS
                    </p>

                    <div className="card-hit">
                        <div className="hit">
                            <div className="like"></div>
                            <div className="sneaker">
                                <img src='4.jpg'></img>
                            </div>
                            <p className="name">
                                Puma x Aka Boku
                                <br></br>
                                Future Rider
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
                        <div className="hit">
                        <div className="like"></div>
                            <div className="sneaker">
                                <img src='5.jpg'></img>
                            </div>
                            <p className="name">
                                Under Armour
                                <br></br>
                                Curry 8
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
                        <div className="hit">
                        <div className="like"></div>
                            <div className="sneaker">
                                <img src='3.jpg'></img>
                            </div>
                            <p className="name">
                                Nike Blazer
                                <br></br>
                                Mid Suede
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
                    </div>


                 </div>
            </div>
        );
    }
}

export default HomePage;
