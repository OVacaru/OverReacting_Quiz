import Reducer from './Reducer';

describe('Reducer', () => {
    let returnState, initState;

    it('initializes with a default state', () => {
        returnState = Reducer(undefined, {})
        expect(returnState).toEqual({ 
            totalPlayers: 0,
            currentPlayer: 0,
            players: [],
            questionID: 0,
            questions: [],
         });
    });

    it('sets players', () => {
        let fakePlayers = 2 
        let fakePlayerDetails = [{ name: "Steve", score: 0 }, { name: "Eve", score: 0}]
        returnState = Reducer(undefined, { type: 'LOAD_PLAYERS', payload: fakePlayers, fakePlayerDetails })
        expect(returnState.totalPlayers).toEqual(fakePlayers)
    });

    it('loads questions', () => {
        let fakeQuestion = [{
            type: 'boolean',
            category: 'maths',
            question: '2+2=4?',
            correct_answer: 'True',
            incorrect_answers: ['False']
        }]
        returnState = Reducer(undefined, {type: 'LOAD_QUESTIONS', payload: fakeQuestion})
        expect(returnState.questions).toEqual(fakeQuestion)    
    });

    it('increases player score', () => {
        initState = {players: {}} ; 
        let fakePlayerID = 1;
        returnState = Reducer(undefined, {type: 'INCREASE_PLAYER_SCORE', payload: fakePlayerID })
        expect(returnState.players[1].score).toBe(1);
    })

    it('loads next player', () => {
        initState = { currentPlayer: 0, totalPlayers: 2};
        returnState = Reducer( initState, { type: 'NEXT_PLAYER'})
        expect(returnState.currentPlayer).toBe(1)
    })

    it('reloads first player', () => {
        initState = { currentPlayer: 1, totalPlayers: 2};
        returnState = Reducer( initState, { type: 'NEXT_PLAYER'})
        expect(returnState.currentPlayer).toBe(0)
    })

    it('resets game', () => {
        returnState = Reducer(undefined, {type: 'RESET_GAME'})
        expect(returnState).toEqual({ 
            totalPlayers: 0,
            currentPlayer: 0,
            players: [],
            questionID: 0,
            questions: [],
         });
    })

     it('loads next question', () => {
        returnState = Reducer(undefined, { type: 'NEXT_QUESTION' })
        expect(returnState.questionID).not.toEqual(0)
    });

    it('sets error', () => {
        let fakeError = 'Oh no!'
        returnState = Reducer(undefined, { type: 'SET_ERROR', payload: fakeError })
        expect(returnState.error).toEqual(fakeError)
    });
})
