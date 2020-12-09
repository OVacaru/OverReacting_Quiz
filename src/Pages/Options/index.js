import React, { Component } from 'react';
import { Link } from 'react-router-dom' ;
import { getQuestions } from "../../Actions";
import { setPlayers } from "../../Actions";
import { connect } from 'react-redux';
import './style.css';

class Options extends Component {

    handleSubmit = e => {
        e.preventDefault();
        this.props.setPlayers(this.state.totalPlayers);
        this.props.getQuestions(this.state.questions, this.state.category, this.state.difficulty);
    };

    handleChange = e => {
        const noOfPlayers = parseInt(e.target.form.noOfPlayers.value);
        const noOfQuestions = e.target.form.noOfQuestions.value;
        const difficulty = e.target.form.difficulty.value;
        const category = e.target.form.category.value;
        this.setState({ totalPlayers: noOfPlayers, questions: noOfQuestions, category:category, difficulty: difficulty });
    }

    render() {
        return (
        <div id="optionPage">
            <h1> The Over Reacting Quiz </h1>
            <div id="optionsForm">
            <form onSubmit={this.handleSubmit}>
                <div className="formLine">
                    <label htmlFor="noOfPlayers"> How Many Players? </label>
                    <input type="number" name="noOfPlayers" min="1" max="4" />
                </div>
                <div className="formLine">
                    <label htmlFor="noOfQuestions"> How Many Questions? </label>
                    <input type="number" name="noOfQuestions" min="1" max="20"/>
                </div>
                <div className="formLine">
                    <label htmlFor="category"> Choose a Category: </label>
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
                </div>
                <div className="formLine">
                    <label htmlFor="difficulty"> Choose a Difficulty Level: </label>
                    <select name="difficulty">
                        <option value="easy"> Easy </option>
                        <option value="medium"> Medium </option>
                        <option value="hard"> Hard </option>
                    </select>
                </div>
                <div className="formLine">
                    <input type="submit" className="optionsBtn" value="Confirm Options" onClick= {this.handleChange}/>
                </div>
                
            </form>
            </div>
            <br/>
            <Link to='/game' className="startBtn">START PLAYING</Link>
        </div>
        );
    };
};

export default connect (null, { getQuestions, setPlayers } )(Options);
