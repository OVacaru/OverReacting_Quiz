import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PopUp from '../../Components/PopUp';
import './style.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPopup: false
        };
    };
        
    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    };

    render() {
        return (
            <div id="homePage">
                <h1> The Over Reacting Quiz </h1>
                <Link to='/options' className="startBtn"> START </Link> 
                <div className="rules">
                    <button id="rulesBtn" onClick={this.togglePopup.bind(this)}> Rules</button>  
                    {this.state.showPopup ?
                    <PopUp 
                        text='Rules:
                        - Test your trivia knowledge!
                        - Choose a category
                        - Maximum 4 players per game'
                        closePopup={this.togglePopup.bind(this)}
                    />
                    : null
                    }
                </div>
            </div>
        );
    };
};

export default Home;