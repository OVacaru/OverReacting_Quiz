import Question from './index';
import { shallow } from 'enzyme';
import { sinon } from 'sinon';
import { TestScheduler } from 'jest';

describe('Question', () => {
    let wrapper, handleSubmitMock, nextQuestionMock, nextPlayerMock, nextPlayerScoreMock, inputs, form;

    beforeEach(() => {
        handleSubmitMock = jest.fn();
        nextQuestionMock = jest.fn();
        const stub = {
            question: {
                type: '',
                correct_answer: '',
                incorrect_answers: []
            },
            userAnswer: null
            }
        wrapper = shallow(<Question.WrappedComponent 
            {...stub} 
            nextQuestion={nextQuestionMock}
            nextPlayer={nextPlayerMock}
            increasePlayerScore={nextPlayerScoreMock}
             />);
        form = wrapper.find('form');
    });

    it('renders a form', () => {
        expect(form).toHaveLength(1);
    });

    it('renders two submit inputs if True or False question', () => {
        wrapper.setProps({ type: 'boolean'})
        inputs = form.find('input')
        expect(inputs).toHaveLength(4)
    });

    it('renders four submit inputs if multiple choice question', () => {
        wrapper.setProps({ type: 'multiple'})
        inputs = form.find('input')
        expect(inputs).toHaveLength(4)
    });

    it('calls handleSubmit (and nextQuestion) on form submission', (e) => {
        input1 = form.find('input').first()
        input1.simulate('click', {preventDefault: jest.fn()})
        expect(handleSubmitMock.mock.calls.length).toBe(1)
    })

    test('shuffleArray shuffles array', () => {
        let arr = [1, 2, 3, 4]
        const instance = wrapper.instance()
        const shuffleArray = sinon.spy(instance, 'shuffleArray')
        arr.simulate('mount')
        expect(shuffleArray.calledOnce).toBe(true);
        expect(shuffledArray).not.toBe(arr)
    })
})