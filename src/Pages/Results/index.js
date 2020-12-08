import React from 'react'
import { Link} from 'react-router-dom';

const Results = () => 
    <div id="resultsPage">
        <h1>Results</h1>
        <p> woohooo you won! </p>
        <Link to='/options'> Play Again! </Link>
    </div>

export default Results;