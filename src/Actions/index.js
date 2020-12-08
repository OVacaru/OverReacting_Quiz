
export function getQuestions (amount, difficulty, type) {
    return async dispatch => {
        try {
            const questions = await fetchQuestions(amount, difficulty, type);
            dispatch(loadQuiz(questions));
        } catch (err) {
            console.warn(err.message);
            dispatch({ type: 'SET_ERROR', payload: err.message });
        }
    }
};

async function fetchQuestions (amount="10", category="9", difficulty="easy") {
    try {
        const resp = await fetch(`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&encode=base64`)
        const data = await resp.json();
        const questions = data.results.map(
            function decodeData (question) {
                const actualType = atob(question.type);
                const actualCategory = atob(question.category);
                const actualQuestion = atob(question.question);
                const actualCorrect_answer = atob(question.correct_answer);
                const actualIncorrect_answers = question.incorrect_answers.map(falseAnswer => atob(falseAnswer));
                return {
                    type:actualType,
                    category: actualCategory,
                    question: actualQuestion,
                    correct_answer: actualCorrect_answer,
                    incorrect_answers: actualIncorrect_answers
                };
            }
        );
        return questions;
    } catch(err) {
        throw new Error(err.message);
    };
};

export const loadQuiz = (questions) => ({ type: 'LOAD_QUIZ', payload: questions });
export const setPlayers = (noOfPlayers) => ({ type: 'SET_PLAYERS', payload: noOfPlayers});
export const nextQuestion = () => ({type: 'LOAD_NEXT_QUESTION'});

// export const loadPlayer = (players) => ({ type: 'LOAD_PLAYER', payload: {players} })
// export const addScoretoPlayer1 = () => ({type: 'ADD_SCORE_TO_PLAYER1' })
// export const addScoretoPlayer2 = () => ({type: 'ADD_SCORE_TO_PLAYER2' })
// export const addScoretoPlayer3 = () => ({type: 'ADD_SCORE_TO_PLAYER3' })
// export const reload = () => ({type: 'RESET_GAME'})