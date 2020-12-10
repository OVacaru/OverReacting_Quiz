import React, { Component } from 'react';
import Player from '../../Components/Player';
import Question from '../../Components/Question';
import Results from '../Results';
import { connect } from 'react-redux';

class Game extends Component {

    render() {
        return (
            <div id="gamePage">
                {this.props.questions.length > 0 && this.props.questionID === this.props.questions.length ? 
                    <Results winner={this.props.players}/> :
                    <div id="gameArea">
                        <Player player={ { 
                            totalPlayers:this.props.totalPlayers,
                            players: this.props.players,
                            currentPlayer: this.props.currentPlayer } }/>
                        <Question
                            currentQuestion={this.props.questions[this.props.questionID]}
                            currentPlayer={{ id: this.props.currentPlayer, stats: this.props.players[this.props.currentPlayer] }}/>
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