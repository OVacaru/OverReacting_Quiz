import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        console.log("Home Page has been called")
        return (
            <>
                <h1> The Over Reacting Quiz </h1>
                <button> <Link to='/options'> Start </Link> </button>
            </>
        )
    }
}

export default Home;