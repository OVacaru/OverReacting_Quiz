const initState = {
    totalPlayers: 0,
    currentPlayer: 0,
    players: [],
    questionID: 0,
    questions: [],
};

const Reducer = (state = initState, action) => {
    switch(action.type){
        case 'LOAD_PLAYERS':
            return { ...state, totalPlayers: action.totalPlayers, players: action.players };
        case 'LOAD_QUESTIONS':
            return { ...state, questions: action.payload };
        case 'INCREASE_PLAYER_SCORE':
            let newState = {...state};
            newState.players[action.payload].score +=1;
            return newState;
        case 'NEXT_PLAYER':
            if (state.currentPlayer === (state.totalPlayers-1) ) {
                return { ...state, currentPlayer: 0 }; 
            } else {
                return { ...state, currentPlayer: state.currentPlayer += 1 };
            };
        case 'NEXT_QUESTION':
            return { ...state, questionID: state.questionID += 1 };
        case 'RESET_GAME':
            return initState;
        case 'SET_ERROR':
            return { ...state, error: action.payload };
        default:
            return state;
    };
};

export default Reducer;