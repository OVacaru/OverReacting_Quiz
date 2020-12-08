import React, { Component } from 'react'
import { Link } from 'react-router-dom' ;
import { getQuestions } from "../../Actions";
import { connect } from 'react-redux';

class Options extends Component {

    handleSubmit = e => {
        e.preventDefault();
        this.props.getQuestions(this.state.questions, this.state.difficulty);
    };

    handleChange = e => {
        const noOfQuestions = e.target.form.noOfQuestions.value
        const difficulty = e.target.form.difficulty.value
        this.setState({ questions: noOfQuestions, difficulty: difficulty })
    }

    render() {
        console.log("Option Page has been called")
        return (
        <>
        <h3> Form goes here </h3>
        <form onSubmit={this.handleSubmit}>
            <label htmlFor="noOfQuestions"> How Many Questions? </label>
            <input type="number" name="noOfQuestions" min="1" max="50" value={this.questions}/>          
            <br/>
            <label htmlFor="difficulty"> Choose a Difficulty Level: </label>
            <select name="difficulty">
                <option value="easy"> Easy </option>
                <option value="medium"> Medium </option>
                <option value="hard"> Hard </option>
            </select>
            <br/>
            <input type="submit" value="Confirm Options" onClick= {this.handleChange}/>
        </form>

        <Link to='/game'>START PLAYING</Link>
        </>
        )
    }
}

export default connect (null, { getQuestions })(Options);


{/* <label for="category">Choose a Category</label>
            <select name="category">
                <option value="geography">Geography</option>
                <option value="science">Science</option>
                <option value="entertainment">Entertainment</option>
                <option value="general">General Knowledge</option>
            </select> */}

 {/* <label for="type">Type of Questions?</label>
                // true or false or multiple choice
            <select>
                <option value="trueOrFalse">True or False</option>
                <option value="multipleChoice">Multiple Choice</option>
            </select> */}