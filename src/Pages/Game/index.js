import React, { Component } from 'react'
//import { Link } from 'react-router-dom';
import Question from '../../Components/Question'
import { connect } from 'react-redux';

class Game extends Component {
    state = { turn: 1 }

    render() {
        return (
            <>
                <h1>Game</h1>
                {/* {this.props.data.length > 0 ? <Question question={this.props.data[this.props.QuestionID]}/> : <p>See Results</p> } */}
                {this.props.data.length > 0 && this.props.QuestionID === this.props.data.length ? 
                    <p>The game has been completed</p> :
                    <Question question={this.props.data[this.props.QuestionID]}/>
                }
            </>
        )
    }
}

const mSTP = state => ({
    data: state.data,
    QuestionID: state.QuestionID
})

export default connect(mSTP, {Question})(Game);