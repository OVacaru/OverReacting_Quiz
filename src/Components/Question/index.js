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
            <div id="questionComponent">
                <p>This is the component: Question</p>
                <h1>{ showQuestion }</h1> <br/>
                {this.props.question.type === "boolean" ? 
                    <form>
                        <input type="submit" value="True" onClick={this.handleSubmit}/> <br/>
                        <input type="submit" value="False" onClick={this.handleSubmit}/> <br/>
                    </form> :
                    <form>
                        <input type="submit" value={ randomAnswer[0] } onClick={this.handleSubmit}/> <br/>
                        <input type="submit" value={ randomAnswer[1] } onClick={this.handleSubmit}/> <br/>
                        <input type="submit" value={ randomAnswer[2] } onClick={this.handleSubmit}/> <br/>
                        <input type="submit" value={ randomAnswer[3] } onClick={this.handleSubmit}/> <br/>
                    </form>
                }
            </div>
        );
    };
};

export default connect(mSTP, { nextQuestion }) (Question);