import React, {Component} from 'react';

class NotFoundPage extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="e404">
                        <p>
                            404
                        </p>
                    </div>
                    <div className="error">
                        <p>
                            Page not found
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default NotFoundPage;
