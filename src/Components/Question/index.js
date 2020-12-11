import React, { Component } from 'react';
import { nextQuestion, nextPlayer, increasePlayerScore} from "../../Actions";
import { connect } from 'react-redux';
import { mSTP } from '../../Pages/Game';
import './style.css';

class Question extends Component {

    handleSubmit = e => {
        e.preventDefault();
        const userAnswer = e.target.value;
        const correctAnswer = this.props.currentQuestion.correct_answer;
        if (userAnswer === correctAnswer) {
            console.log( "You got it right!");
            this.props.increasePlayerScore(this.props.currentPlayer.id);
            this.props.nextPlayer();
            this.props.nextQuestion();
        } else {
            console.log( "You got it wrong!");
            this.props.nextPlayer();
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
        const playerData = this.props.currentPlayer;
        const questionData = this.props.currentQuestion;
        const allAnswers = [questionData.correct_answer, questionData.incorrect_answers[0], questionData.incorrect_answers[1], questionData.incorrect_answers[2]];
        const randomAnswer = this.shuffleArray(allAnswers);
        return (
            <div id="questionComponent">
                <p className="turn"> It is {playerData.stats.name} turn!</p>
                <h1>{ questionData.question } </h1> <br/>
                {questionData.type === "boolean" ? 
                    <form className="answerForm">
                        <input type="submit" className="answer" value="True" onClick={this.handleSubmit}/> <br/>
                        <input type="submit" className="answer" value="False" onClick={this.handleSubmit}/> <br/>
                    </form> :
                    <form className="anwerForm">
                        <input type="submit" className="answer" value={ randomAnswer[0] } onClick={this.handleSubmit} /> <br/>
                        <input type="submit" className="answer" value={ randomAnswer[1] } onClick={this.handleSubmit} /> <br/>
                        <input type="submit" className="answer" value={ randomAnswer[2] } onClick={this.handleSubmit} /> <br/>
                        <input type="submit" className="answer" value={ randomAnswer[3] } onClick={this.handleSubmit} /> <br/>
                    </form>
                }
            </div>
        );
    };
};

export default connect(mSTP, { nextQuestion, nextPlayer, increasePlayerScore }) (Question);