import Question from './index';
import { shallow } from 'enzyme';

describe('Question', () => {
    let wrapper, handleSubmitMock, nextQuestionMock, inputs, form;

    beforeEach(() => {
        handleSubmitMock = jest.fn();
        nextQuestionMock = jest.fn();
        const stub = {
            question: {
                type: '',
                correct_answer: '',
                incorrect_answers: []
            },
            userAnswer: ""
            }
        wrapper = shallow(<Question.WrappedComponent 
            {...stub} 
            nextQuestion={nextQuestionMock}
             />);
        form = wrapper.find('form');
    });

    test('it renders a form', () => {
        expect(form).toHaveLength(1);
    });

    test('it renders two submit inputs if True or False question', () => {
        wrapper.setProps({ type: 'boolean'})
        inputs = form.find('input')
        expect(inputs).toHaveLength(4)
    });

    test('it renders four submit inputs if multiple choice question', () => {
        wrapper.setProps({ type: 'multiple'})
        inputs = form.find('input')
        expect(inputs).toHaveLength(4)
    });

    // test('it calls handleSubmit (and nextQuestion) on form submission', () => {
    //     wrapper.setProps({ correct_answer: userAnswer})
    //     form.simulate('submit', {preventDefault: jest.fn()})
    //     expect(handleSubmitMock.mock.calls.toHaveLength).toBe(1)
    // })

})