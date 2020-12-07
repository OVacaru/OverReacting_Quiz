export const loadPlayer = (players) => ({
    type: 'LOAD_PLAYER',
    payload: {players}
})

export const loadQuiz = (data) => ({
    type: 'LOAD_QUIZ',
    payload: {data}
})

export function getQuestions (amount, difficulty, type) {
    return async dispatch => {
        // dispatch(loading(searchTerm));
        try {
            const questions = await fetchQuestions(amount, difficulty, type);
            console.log(questions);
            dispatch(loadQuiz(questions));
        } catch (err) {
            console.warn(err.message);
            dispatch({ type: 'SET_ERROR', payload: err.message })
        }
    }
};

// https://opentdb.com/api.php?amount=10&difficulty=medium&type=boolean

async function fetchQuestions (amount=10, difficulty="medium", type="boolean") {
    try {
        const resp = await fetch(`https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=${type}`)
        const data = await resp.json();
        // console.log(data.results)
        return data.results.map(quest => ({
            question: quest.question,
            correct_answer: quest.correct_answer,
            incorrect_answers: quest.incorrect_answers
        }));
    } catch(err) {
        throw new Error(err.message)
    };
};


export const addScoretoPlayer1 = () => ({type: 'ADD_SCORE_TO_PLAYER1' })
export const addScoretoPlayer2 = () => ({type: 'ADD_SCORE_TO_PLAYER2' })
export const addScoretoPlayer3 = () => ({type: 'ADD_SCORE_TO_PLAYER3' })
export const loadnextQuestion = () => ({type: 'NEXT QUESTION' })
export const reload = () => ({type: 'RESET_GAME'})