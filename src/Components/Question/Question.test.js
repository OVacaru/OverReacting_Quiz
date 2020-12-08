import Question from './index';
import { shallow } from 'enzyme';

describe('Question', () => {
    let wrapper, getQuestionMock, inputs, form;

    beforeEach(() => {
        getQuestionMock = jest.fn();
        const stub = {
            question: {
                type: '',
                correct_answer: '',
                incorrect_answers: []
            }
            }
        wrapper = shallow(<Question.WrappedComponent 
            {...stub} 
            getQuestion={getQuestionMock}
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

})