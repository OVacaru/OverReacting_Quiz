import React, { Component } from 'react';

class Player extends Component {

    render() {
        return (
            <div id="playerComponent">
                <p>This is the component: Player</p>
                <ul>
                    <li>Player 1</li>
                    <li>Player 2</li>
                    <li>Player 3</li>
                    <li>Player 4</li>
                </ul>
            </div>
        );
    }   
};

export default Player ;