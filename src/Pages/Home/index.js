import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <>
                <h1> The Over Reacting Quiz </h1>
                <Link to="/options"> Start </Link>
            </>
        )
    }
}

export default Home;