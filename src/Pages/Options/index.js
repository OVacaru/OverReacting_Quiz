import React, { Component } from 'react'
import { Link } from 'react-router-dom' ;
import { getQuestions } from "../../Actions";
import { connect } from 'react-redux';

class Options extends Component {
    constructor() {
        super()
        this.state = { 
            players: "1",
            questions: 3,
            difficulty: "easy"
        };     
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log("hi")
        this.props.getQuestions(this.state.questions, this.state.difficulty);
    };

    handleChange = e => {
        const noOfQuestions = e.target.value
        this.setState({ questions: noOfQuestions })
    }

    render() {
        return (
        <>
        <h3>Form goes here</h3>
        <form onSubmit={this.handleSubmit}>
            
            <label htmlFor="noOfQuestions">How Many Questions?</label>
            <input type="number" name="noOfQuestions" min="1" max="50" value={this.questions} onChange={this.handleChange}/>
            {/* <option value="1">1 Question </option> */}
            
            <br></br>
            <label htmlFor="difficulty">Choose a Difficulty Level</label>
            <select name="difficulty">
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>
            
            <button onClick={this.handleSubmit}><Link to='/game'>START PLAYING</Link></button>

        </form>

        
        </>
        )
    }
}

// const mSTP = state => ({
//     data: state.data,
//     error: state.error
// });

// export default Options;
export default connect (null, { getQuestions })(Options);


// number of questions, difficulty, type



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