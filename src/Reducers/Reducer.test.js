import Reducer from './Reducer';

describe('Reducer', () => {
    let returnState;

    it('initializes with a default state', () => {
        returnState = Reducer(undefined, {})
        expect(returnState).toEqual({ 
            totalPlayers: 0,
            players: [],
            questionID: 0,
            questions: [],
         });
    });

    it('sets players', () => {
        let fakePlayers = 2 
        let fakePlayerDetails = [{ name: "Steve", score: 0 }, { name: "Eve", score: 0}]
        returnState = Reducer(undefined, { type: 'LOAD_PLAYERS', payload: (fakePlayers, fakePlayerDetails) })
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
