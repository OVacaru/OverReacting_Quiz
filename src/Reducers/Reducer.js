// const initState = { allPlayers:[], winner: null, loading: false };
const initState = { data: [], noOfPlayers:3, players: [{name:"Player 1", score: 0}, {name:"Player 2", score: 0}, {name:"Player 3", score: 0}], QuestionID: 0};

// {
//     "response_code": 0,
//     "results": [
//       {
//         "category": "General Knowledge",
//         "type": "boolean",
//         "difficulty": "medium",
//         "question": "&quot;Typewriter&quot; is the longest word that can be typed using only the first row on a QWERTY keyboard.",
//         "correct_answer": "True",
//         "incorrect_answers": [
//           "False"
//         ]
//       },
//     ]
// }


const Reducer = (state = initState, action) => {
    switch(action.type){
        // case 'LOADING':
        //     return { ...state, data: action.payload, loading: true };
        case 'LOAD_QUIZ':
            return {...state, data: action.payload}
        case 'LOAD_PLAYER':
            return {...state, noOfPlayers: action.payload}
        case 'ADD_SCORE_TO_PLAYER1':
            return {...state, players: [{name: state.players[0].name, score: state.players[0].score+=1}, state.players[1],state.players[2],state.players[3]] }
        case 'ADD_SCORE_TO_PLAYER2':
            return {...state, players: [state.players[0], {name: state.players[1].name, score: state.players[1].score+=1}, state.players[2],state.players[3]]}
        case 'ADD_SCORE_TO_PLAYER3':
            return {...state, players: [state.players[0], state.players[1], {name: state.players[2].name,  score: state.players[2].score+=1}]}
        case 'LOAD_NEXT_QUESTION':
            return {...state, QuestionID: state.QuestionID+= 1}
        case 'RELOAD':
            return {data: [], noOfPlayers: 0, players: [{name: "Player 1", score:0},{name: "Player 2", score:0}, {name: "Player 3", score:0}]}
        case 'SET_ERROR':
            return { ...state, error: action.payload, loading: false }
            default:
                return state
    };
};

export default Reducer;