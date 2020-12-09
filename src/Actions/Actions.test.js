import * as Actions from './index';
import { fetch } from 'jest-fetch-mock';
describe('Actions', () => {
    let action, fetch;


    describe('loadQuiz', () => {
        it('returns an action object with type LOAD_QUIZ and payload of questions', () => {
            action = Actions.loadQuiz(2);
            expect(action).toEqual({ type: "LOAD_QUIZ", payload: 2 })
        })
    });
    
    describe('setPlayers', () => {
        it('returns an action object with type SET_PLAYERS and payload of noOfPlayers', () => {
            action = Actions.setPlayers(2);
            expect(action).toEqual({ type: "SET_PLAYERS", payload: 2 })
        })
    });

    describe('nextQuestion', () => {
        it('returns an action object with type LOAD_NEXT_QUESTION', () => {
            action = Actions.nextQuestion();
            expect(action).toEqual({ type: "LOAD_NEXT_QUESTION" })
        })
    });

    describe('handleError', () => {
        it('returns an action object with type SET_ERROR and payload of received error message value', () => {
            action = Actions.handleError({ message: 'Nope' });
            expect(action).toEqual({ type: "SET_ERROR", payload: 'Nope' })
        })
    });

    // describe('getQuestions', () => {
    //     it('triggers loadQuiz on successful fetch', async () => {
    //         fetch = fetch.resetMocks()
    //         let dispatch = jest.fn();
    //         let fakeResponse = {questions: [ { 
    //             type: "boolean",
    //             category: "maths",
    //             question: "2+2=4?",
    //             correct_answer: "True",
    //             incorrect_answers: ["False"]
    //         }]};
    //         fetch.mockResponse(JSON.stringify(fakeResponse))
    //         let spy = sinon.spy(Actions, 'loads')
    //         Actions.loads.fetches()(dispatch);
    //         expect(spy.callCount).toEqual(1)
    //     })
    // })
    // This is not functioning yet! Don't copy!
    // describe('fetchs thunk', () => {
    //     it('triggers loads on successful fetch', async () => {
    //         fetch.mockResponse(JSON.stringify(fakeResponse))
    //         let spy = sinon.spy(Actions, 'loads')
    //         Actions.loads = spy
    //         await Actions.fetchs()(dispatch);
    //         expect(spy.callCount).toEqual(1)
    //     })
    // })
});


