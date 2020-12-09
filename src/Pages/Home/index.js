import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div id="homePage">
                <h1> The Over Reacting Quiz </h1>
                <button> <Link to='/options'> Start </Link> </button>
            </div>
        )
    }
}

export default Home;