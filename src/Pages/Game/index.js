import React, { Component } from 'react';
import Player from '../../Components/Player';
import Question from '../../Components/Question';
import Results from '../Results';
import { connect } from 'react-redux';

class Game extends Component {
    state={
        currentPlayer: 0,
    }

    render() {
        return (
            <div id="gamePage">
                <p>This is the page: Game</p>
                {this.props.questions.length > 0 && this.props.questionID === this.props.questions.length ? 
                    <Results winner={this.props.players}/> :
                    <div id="gameArea">
                        <Player player={{ totalPlayers:this.props.totalPlayers, players: this.props.players }}/>
                        <Question question={this.props.questions[this.props.questionID]}/>
                    </div>
                }
            </div>
        );
    };
};

export const mSTP = state => ({
    totalPlayers: state.totalPlayers,
    players: state.players,
    questionID: state.questionID,
    questions: state.questions
});

export default connect(mSTP, { Question, Results, Player } )(Game);