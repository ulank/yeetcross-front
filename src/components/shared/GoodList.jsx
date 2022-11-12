import React, {Component} from 'react';
import GoodService from "../../services/GoodService";


class GoodList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            goods: [],
        }
    }

    componentDidMount() {
        this.retrieveGoods();
    }

    retrieveGoods() {
        GoodService.getAll().then(response => {
            this.setState({
                goods: response
            });
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
