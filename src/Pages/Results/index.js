import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link} from 'react-router-dom';
import { resetGame } from '../../Actions';

class Results extends Component {
    componentWillUnmount() {
        this.props.resetGame();
    }
    render () {
        return(
            <div id="resultsPage">
                <h1>Results</h1>
                <p> woohooo you won! </p>
                <Link to='/'> Play Again! </Link>
            </div>
        )
    }
}

export default connect(null, {resetGame}) (Results);