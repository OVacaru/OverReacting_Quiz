import React, { Component } from 'react';

class AddPlayer extends Component {
    state = {
        playerName: "Player " + (this.props.counter+1),
    };

    handleInputChange = e => this.setState({ playerName: e.target.value });
  
    render() {
        return (
            <input type="text" name="playerName" value={this.state.playerName} onChange={this.handleInputChange}/>
        );
    };
};

export default AddPlayer;