import React, { Component } from 'react'
//import { Link } from 'react-router-dom';
import Question from '../../Components/Question'
import { connect } from 'react-redux';

class Game extends Component {

    render() {
        console.log("Game Page has been called")
        return (
            <>
                <h1>Game</h1>

                {this.props.questions.length > 0 && this.props.questionID === this.props.questions.length ? 
                    <p>The game has been completed</p> :
                    <Question question={this.props.questions[this.props.questionID]}/>
                }
            </>
        )
    }
}

export const mSTP = state => ({
    totalPlayers: state.totalPlayers,
    players: state.players,
    questionID: state.questionID,
    questions: state.questions
})

export default connect(mSTP, {Question} )(Game);