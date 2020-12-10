import React, { Component } from 'react';
import { addPlayer } from '../../Actions/index';
// import './style.css';

class PlayerName extends Component {
    
    state = {
        name: []
    }

    handleInput = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleFormSubmit = e => {
        e.preventDefault();
        this.setState({ name: ""})
    };

    createPlayer = e => {
        e.preventDefault();
        let playerName = this.state.name
        this.props.dispatch(addPlayer(playerName))
        e.currentTarget.reset();
    }

    render() {
        // const renderPlayers = this.state.name.map(name => (
        //     <li key={name.id} id="list-items">
        //         {name}
        //     </li>
        // ))

        return (
            <div>
                <div>
                    <h3>Add player</h3>
                </div>
                <form onSubmit={this.handleFormSubmit} >
                    <input type="text" id="nameInput" name="nameInput" placeholder="Enter name here" value={this.state.nameInput} onChange={this.handleInput}/>
                    <button type="submit">Add Player
                    </button>
                </form>
                <div>
                    {/* <ul> { renderPlayers } </ul> */}
                </div>
            </div>

        )
    }
}

export default PlayerName;

