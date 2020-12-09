import Reducer from './Reducer';

describe('Reducer', () => {
    let returnState;

    it('initializes with a default state', () => {
        returnState = Reducer(undefined, {})
        expect(returnState).toEqual({ 
            totalPlayers: 0,
            players: [ {
                name: "",
                score: 0
            } ],
            questionID: 0,
            questions: [ { 
                type: "",
                category: "",
                question: "",
                correct_answer: "",
                incorrect_answers: [""]
            }],
            error: null
         });
    });

    it('sets players', () => {
        let fakePlayers = 2 
        returnState = Reducer(undefined, { type: 'SET_PLAYERS', payload: fakePlayers})
        expect(returnState.totalPlayers).toEqual(fakePlayers)
    });

    it('loads quiz', () => {
        let fakeQuestion = [{
            type: 'boolean',
            category: 'maths',
            question: '2+2=4?',
            correct_answer: 'True',
            incorrect_answers: ['False']
        }]
        returnState = Reducer(undefined, {tyoe: 'LOAD_QUIZ', payload: fakeQuestion})
        expect(returnState.questions).toEqual(fakeQuestion)    
    });

    it('loads next question', () => {
        returnState = Reducer(undefined, { type: 'LOAD_NEXT_QUESTION' })
        expect(returnState.questionID).not.toEqual(0)
    });

    it('sets error', () => {
        let fakeError = 'Oh no!'
        returnState = Reducer(undefined, { type: 'SET_ERROR', payload: fakeError })
        expect(returnState.error).toEqual(fakeError)
    });
})
