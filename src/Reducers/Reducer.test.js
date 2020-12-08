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
            } ] })
    })

    // it('loads data', () => {
    //     let fakeDoggos = [{id: 1, img: 'test.jpg', liked: false}, {id: 2, img: 'test2.jpg', liked: false}] 
    //     returnState = Reducer(undefined, { type: 'LOAD_DOGGOS', payload: fakeDoggos})
    //     expect(returnState.allDoggos).toEqual(fakeDoggos)
    // })

    // it('toggles like status of dog of given id', () => {
    //     let fakeState = {
    //         allDoggos: [{id: 1, img: 'test.jpg', liked: false}, {id: 2, img: 'test2.jpg', liked: false}],
    //         loading: false
    //     }
    //     returnState = Reducer(fakeState, { type: 'LIKE_DOGGO', payload: 1})
    //     expect(returnState.allDoggos[0].liked).toBe(true)
    //     expect(returnState.allDoggos[1].liked).toBe(false)
    // })
})
