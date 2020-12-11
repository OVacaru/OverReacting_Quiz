import React, { Component } from 'react';
import './style.css';

class PopUp extends Component {
    render() {
        return (
            <div className="popup">
                <div className="popupContent">
                    <h1>{this.props.text}
                    </h1>
                    <button id="closeBtn" onClick={this.props.closePopup}>Close</button>
                </div>
            </div>
        );
    };
};

export default PopUp;