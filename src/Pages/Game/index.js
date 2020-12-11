import React, { Component } from 'react';
import Player from '../../Components/Player';
import Question from '../../Components/Question';
import Results from '../Results';
import { connect } from 'react-redux';
import './style.css';

class Game extends Component {

    render() {
        return (
            
            <div id="gamePage">
                <h1> The Over Reacting Quiz </h1>
                {this.props.questions.length > 0 && this.props.questionID === this.props.questions.length ? 
                    <Results winner={this.props.players}/> :
                    <div id="gameArea">
                        <div id="playerStats" className="grid-item">
                        <Player playerStats={ this.props.players } currentQuestion={this.props.questions[this.props.questionID]}/>
                        </div>
                        <div id="question" className="grid-item">
                        <Question 
                            currentQuestion={this.props.questions[this.props.questionID]}
                            currentPlayer={{ id: this.props.currentPlayer, stats: this.props.players[this.props.currentPlayer] }}/>
                        </div>
                    </div>
                }
            </div>
        );
    };
};

export const mSTP = state => ({
    totalPlayers: state.totalPlayers,
    currentPlayer: state.currentPlayer,
    players: state.players,
    questionID: state.questionID,
    questions: state.questions
});

export default connect(mSTP, { Question, Results, Player } )(Game);