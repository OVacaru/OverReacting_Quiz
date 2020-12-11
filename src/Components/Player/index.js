import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mSTP } from '../../Pages/Game';
import './style.css';

class Player extends Component {

    renderTableHeader () {
        let header = Object.keys(this.props.playerStats[0]);
        return header.map ((key, index) => {
        return <th key={index}>{key.toUpperCase()}</th>;
        });
    };

    renderTableData () {
        return this.props.playerStats.map ((player, index) => {
            const { name, score } = player;
            return (
                <tr key={index}>
                    <td>{name}</td>
                    <td>{score}</td>
                </tr>
            );
        });
    };

    render() {
        return (
            <div id="playerComponent">
                <table id="playerTable">
                    <tbody>
                        <tr>{this.renderTableHeader()}</tr>
                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        );
    };
};

export default connect(mSTP) (Player);