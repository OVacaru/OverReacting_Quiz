import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mSTP } from '../Game';
import { getQuestions } from "../../Actions";
import { setPlayers } from "../../Actions";
import AddPlayer from '../../Components/AddPlayer';

import './style.css';

class Options extends Component {
    state = {
        totalPlayers: 1,
        players: []
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.setPlayers(this.state.totalPlayers, this.state.players);
        this.props.getQuestions(this.state.questions, this.state.category, this.state.difficulty);
    };

    handleInput = e => {
        const questions = e.target.form.questions.value;
        const difficulty = e.target.form.difficulty.value;
        const category = e.target.form.category.value;
        const players = [];
        if (this.state.totalPlayers === 1) {
            players.push({name: e.target.form.playerName.value, score: 0});
        } else {
            e.target.form.playerName.forEach(input => {
                players.push({name: input.value, score: 0});
            });
        };
        this.setState({ 
            totalPlayers: players.length,
            players: players,
            questions: questions, 
            category: category, 
            difficulty: difficulty });
    };

    addPlayer = () => {
        if ( this.state.totalPlayers < 4 ){
            this.setState({ totalPlayers: this.state.totalPlayers + 1 });
        } else {
            alert("Maximum Numbers of Players Reached!");
        }
    };

    startGame () {
        this.props.history.push('/game');
    };

    render() {
        const addMorePlayers = [];
        for (let i = 0; i < this.state.totalPlayers; i++) {
            addMorePlayers.push(<AddPlayer key={i} counter={i}/>)
        };
        return (
            <>
            { this.props.questions.length > 1 ? this.startGame() :
                <div id="optionPage">
                    <h1> The Over Reacting Quiz </h1>
                    <form onSubmit={this.handleSubmit}>
                    <div>
                        <div id="optionsForm">
                        <div className="formLine">
                            <label htmlFor="playerName"> Who is playing? </label><br/>
                        {addMorePlayers} <br/>
                            <button onClick={this.addPlayer}> {this.state.totalPlayers >= 4 ? "Player Limit Reached!": "Add New Player"}</button>
                        </div>
                        <br/>
                        <div className="formLine">
                            <label htmlFor="questions"> How many questions? </label>
                            <input type="number" name="questions" min="1" max="24" defaultValue="8"/>
                        </div>
                        <br/>
                        <div className="formLine">
                            <label htmlFor="category"> Choose category: </label>
                        <select name="category" >
                            <option value="9" > General Knowledge </option>
                            <option value="10" > Books </option>
                            <option value="11" > Film </option>
                            <option value="14" > Television</option>
                            <option value="15" > Video Games </option>
                            <option value="17" > Science and Nature </option>
                            <option value="22" > Geography </option>
                            <option value="23" > History </option>
                        </select>
                        </div>
                        <br/>
                        <div className="formLine">
                           <label htmlFor="difficulty"> Choose difficulty: </label>
                        <select name="difficulty">
                            <option value="easy"> Easy </option>
                            <option value="medium"> Medium </option>
                            <option value="hard"> Hard </option>
                        </select> 
                        </div>
                        <br/>
                        <div className="formLine">
                           <input type="submit" className="optionsBtn" value="Confirm Options" onClick= {this.handleInput}/> 
                        </div>
                        </div>
                        </div>
                    </form> <br/>
                    
                </div>
            }
            </>
        );
    };
};

export default connect (mSTP, { getQuestions, setPlayers } )(Options);
