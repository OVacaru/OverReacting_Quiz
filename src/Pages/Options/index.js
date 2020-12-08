import React, { Component } from 'react'
import { Link } from 'react-router-dom' ;
import { getQuestions } from "../../Actions";
import { setPlayers } from "../../Actions";
import { connect } from 'react-redux';

class Options extends Component {

    handleSubmit = e => {
        e.preventDefault();
        this.props.setPlayers(this.state.totalPlayers)
        this.props.getQuestions(this.state.questions, this.state.category, this.state.difficulty);
    };

    handleChange = e => {
        const noOfPlayers = parseInt(e.target.form.noOfPlayers.value)
        const noOfQuestions = e.target.form.noOfQuestions.value
        const difficulty = e.target.form.difficulty.value
        const category = e.target.form.category.value
        this.setState({ totalPlayers: noOfPlayers, questions: noOfQuestions, category:category, difficulty: difficulty })
    }

    render() {

        console.log("Option Page has been called")
        return (
        <>
        <h3> Form goes here </h3>
        <form onSubmit={this.handleSubmit}>
            <label htmlFor="noOfPlayers"> How Many Players? </label>
            <input type="number" name="noOfPlayers" min="1" max="4" />
            <br/>
            <label htmlFor="noOfQuestions"> How Many Questions? </label>
            <input type="number" name="noOfQuestions" min="1" max="20"/>
            <br/>
            <label htmlFor="category"> Choose a category: </label>
            <select name="category" >
                <option value="9" > General Knowledge </option>
                <option value="10" > Books </option>
                <option value="11" > Film </option>
                <option value="14" > Television</option>
                <option value="15" > Video Games </option>
                <option value="17" > Science and Nature </option>
                <option value="22" > Geography </option>
                <option value="23" > History </option>
            </select>
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

export default connect (null, { getQuestions, setPlayers })(Options);
