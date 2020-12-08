import React, { Component } from 'react';
import { nextQuestion } from "../../Actions";
import { connect } from 'react-redux';
import { mSTP } from '../../Pages/Game';

class Question extends Component {

    handleSubmit = e => {
        e.preventDefault();
        const userAnswer = e.target.value;
        const correctAnswer = this.props.question.correct_answer;
        if (userAnswer === correctAnswer) {
            console.log( "You got it right!");
            this.props.nextQuestion();
            
        } else {
            console.log( "You got it wrong!");
            this.props.nextQuestion();
        };
    };

    shuffleArray (array) {
        let currentId = array.length;
        while (0 != currentId) {
            let randomId = Math.floor(Math.random()* currentId);
            currentId -= 1;
            let temp = array[currentId];
            array[currentId] = array[randomId];
            array[randomId] = temp;
        };
        return array;
    };
    
    render() {
        const showQuestion = this.props.question.question;
        const data = this.props.question;
        const allAnswers = [data.correct_answer, data.incorrect_answers[0], data.incorrect_answers[1], data.incorrect_answers[2]];
        const randomAnswer = this.shuffleArray(allAnswers);
        return (
            <>
                <p>This is the component: Question</p>
                <h1>{ showQuestion }</h1> <br/>
                {this.props.question.type === "boolean" ? 
                    <form onSubmit={ this.handleSubmit }>
                        <input type="submit" value="True" /> <br/>
                        <input type="submit" value="False"/> <br/>
                    </form> :
                    <form onSubmit={ this.handleSubmit }>
                        <input type="submit" value={ randomAnswer[0] } /> <br/>
                        <input type="submit" value={ randomAnswer[1] } /> <br/>
                        <input type="submit" value={ randomAnswer[2] } /> <br/>
                        <input type="submit" value={ randomAnswer[3] } /> <br/>
                    </form>
                }
            </>
        );
    };
};

export default connect(null, { nextQuestion }) (Question) ;