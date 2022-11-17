import React, {Component} from 'react';
import HitsList from "../shared/HitsList";

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

                    <HitsList/>
                 </div>
            </div>
        );
    }
}

export default HomePage;
