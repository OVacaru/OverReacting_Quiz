const initState = {
    totalPlayers: 0,
    players: [],
    questionID: 0,
    questions: []
};

const Reducer = (state = initState, action) => {
    switch(action.type){
        case 'LOAD_PLAYERS':
            return { ...state, totalPlayers: action.totalPlayers, players: action.players };
        case 'LOAD_QUESTIONS':
            return { ...state, questions: action.payload };
        // case 'LOAD_PLAYER':
        //     return {...state, noOfPlayers: action.payload}
        case 'INCREASE_PLAYER_SCORE':
            return {...state, name:action.payload, score: score +1  }; //this is wrong 
        case 'NEXT_QUESTION':
            return { ...state, questionID: state.questionID += 1 };
        // case 'RELOAD':
        //     return {data: [], noOfPlayers: 0, players: [{name: "Player 1", score:0},{name: "Player 2", score:0}, {name: "Player 3", score:0}]}
        case 'SET_ERROR':
            return { ...state, error: action.payload };
        default:
            return state;
    };
};

export default Reducer;