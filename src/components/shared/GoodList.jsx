import React, {useEffect, useState} from 'react';
import axios from 'axios';

const GoodList = () => {

    const [sneakers, setSneakers] = useState([]);

    useEffect(() => {
        fetchSneakers();
    }, []);

    const fetchSneakers = () => {
        axios
            .get('http://localhost:8087/yeetcross/api/business/sneakers')
            .then((res) => {
                console.log(res);
                setSneakers(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <div>
            <div className="products">
                {sneakers.map((sneaker) => (
                    <div className="hits" key={sneaker.id}>
                        <div className="like"></div>
                        <div className="sneaker">
                            <img src={sneaker.image} alt=''/>
                        </div>
                        <p className="name">
                            {sneaker.name}
                            <br></br>
                        </p>
                        <div className="cont">
                            <div className="type">
                                <p className="price">Price:</p>
                                <p className="value">{sneaker.offers.price} {sneaker.offers.priceCurrency}</p>
                            </div>
                            <div className="adder">
                                <button>+</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GoodList;
