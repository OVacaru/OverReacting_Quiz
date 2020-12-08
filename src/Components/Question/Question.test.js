import Question from './index';
import { shallow } from 'enzyme';

describe('Question', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Question type='' />)
    });

    test('it renders a form', () => {
        let form = wrapper.find('form');
        expect(form).toHaveLength(1);
    });

    test('it renders two submit inputs if True or False question', () => {
        wrapper.setProps({ type: 'boolean'})
        form = wrapper.find('form');
        let inputs = form.find('input')
        expect(inputs).toHaveLength(2)
    });

    test('it renders four submit inputs if multiple choice question', () => {
        wrapper.setProps({ type: 'multiple'})
        form = wrapper.find('form');
        let inputs = form.find('input')
        expect(inputs).toHaveLength(4)
    });

})