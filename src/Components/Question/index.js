import React, { Component } from 'react';
import { nextQuestion } from "../../Actions";
import { connect } from 'react-redux';
import { mSTP } from '../../Pages/Game';

class Question extends Component {

    handleBoolean = e => {
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

    handleMultiple = e => {
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

    shuffleArray (array) {
        let currentId = array.length;
        while (0 != currentId) {
            let randomId = Math.floor(Math.random()* currentId);
            currentId -= 1;
            let temp = array[currentId];
            array[currentId] = array[randomId];
            array[randomId] = temp;
        }
        return array;
    }
    
    render() {
        console.log("Question Component has been called");
        const showQuestion = this.props.question.question;
        const allAnswers = [
            this.props.question.correct_answer,
            this.props.question.incorrect_answers[0],
            this.props.question.incorrect_answers[1],
            this.props.question.incorrect_answers[2]]
        const randomAnswer = this.shuffleArray(allAnswers);
        return (
            <>
                <h1>Game</h1>
                <h1>{showQuestion}</h1> <br/>
                {this.props.question.type === "boolean" ? 
                    <form>
                        <input type="submit" value="True" onClick= {this.handleBoolean}/> <br/>
                        <input type="submit" value="False" onClick= {this.handleBoolean}/> <br/>
                    </form> :
                    <form>
                        <input type="submit" value={randomAnswer[0]} onClick= {this.handleMultiple}/> <br/>
                        <input type="submit" value={randomAnswer[1]} onClick= {this.handleMultiple}/> <br/>
                        <input type="submit" value={randomAnswer[2]} onClick= {this.handleMultiple}/> <br/>
                        <input type="submit" value={randomAnswer[3]} onClick= {this.handleMultiple}/> <br/>
                    </form>
                }
            </>
        )
    }
};

export default connect(null, { nextQuestion }) (Question) ;