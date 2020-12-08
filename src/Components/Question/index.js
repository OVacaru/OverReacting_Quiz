import React, { Component } from 'react';
import { nextQuestion } from "../../Actions";
import { connect } from 'react-redux';
import { mSTP } from '../../Pages/Game';

class Question extends Component {

    handleChange = e => {
        e.preventDefault();
        const userAnswer = e.target.value
        const correctAnswer = this.props.question.correct_answer;
        if (userAnswer === correctAnswer) {
            console.log( "You got it right!")
            this.props.nextQuestion();
            
        } else {
            console.log( "You got it wrong!")
            this.props.nextQuestion();
        };
    };
    
    render() {
        const showQuestion = this.props.question.question;
        console.log("Question Component has been called");

        return (
            <>
                <form>
                    <h1>{showQuestion}</h1> <br/>
                    <input type="submit" value="True" onClick= {this.handleChange}/> <br/>
                    <input type="submit" value="False" onClick= {this.handleChange}/> <br/>
                </form>
            </>
        )
    }
};

export default connect(null, { nextQuestion }) (Question) ;