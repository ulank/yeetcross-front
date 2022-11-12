import React, {Component} from 'react';
import GoodService from "../../services/GoodService";


class GoodList extends Component {
    componentDidMount() {
        this.retrieveGoods();
    }

    retrieveGoods() {
        GoodService.getAll().then(response => {
            this.setState({
                goods: response
            });
            console.log(response);
        })
            .catch(e => {
                console.log(e);
            });
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default GoodList;
