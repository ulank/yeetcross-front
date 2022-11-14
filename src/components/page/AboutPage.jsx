import React, {Component} from 'react';

class AboutPage extends Component {
    render() {
        return (
            <div>
                <div className='about'>
                    <h2 className='h2'>About</h2>
                </div>

                
                <div className='about_text'>
                    <div className='text_in'>
                    <p>The first Yeetcross store opened in Almaty in 2010, 
                        and in Astana in 2012. 
                        <br />
                        From that moment, a new era in the retail of sneakers began – the era of Yeetcross.
                        </p>
                    <p>From the very beginning, 
                        the network was created as stores of high-quality and comfortable shoes from well-known world brands for the whole family.
                        </p>
                    </div>
                </div>


                <div className='cards'>
                    <div className='card'>
                        <h2>Market Leader</h2>
                        <p>Today, Yeetcross remains the undisputed market leader. 
                            The network includes more than 80 stores in Ukraine, 
                            Kazakhstan and Russia, which feature products from Nike, Puma, Under Armour and other leading global brands.</p>
                    </div>

                    <div className='card'>
                        <h2>Large assortment</h2>
                        <p>Yeetcross is constantly working to meet the market trends as much as possible, giving customers the opportunity 
                            not only to buy high-quality shoes, clothes and accessories, 
                            but also to create their own image, style, express themselves and at the same time get a pleasant shopping experience.</p>
                    </div>
                </div>





                <div className='brand'>
                    <h2>Brands</h2>
                    <div className='brand_list'>

                    <div className="brands">
                        <img src="https://intertop.kz/upload/iblock/b87/b87a8bb013dedb3bfe4b99127b2e40d1.jpg" alt="" />
                    </div>

                    <div className="brands">
                        <img src="https://intertop.kz/upload/iblock/149/149a90daee04c4495cf5eccc447bdabb.jpg" alt="" />
                    </div>


                    <div className="brands">
                        <img src="https://intertop.kz/upload/iblock/bf8/bf82babab4e84077e9703a6d30cbbfab.png" alt="" />
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutPage;
