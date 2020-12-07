import Options from './index';
import { shallow } from 'enzyme';

describe('Options', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Options />)
    });

    test('it renders a form with a number input and a submit', () => {
        let form = wrapper.find('form');
        expect(form).toHaveLength(1);
        const inputs = form.find('input')
        expect(inputs).toHaveLength(2);
        expect(inputs.first().props().type).toBe('number')
    });

    test('it updates state on user input', () => {
        form = wrapper.find('form');
        const numInput = form.find('input').first();
        const initState = wrapper.state('noOfQuestions');
        numInput.simulate('change', { target: { value: 5 } })
        const newState = wrapper.state('noOfQuestions');
        expect(newState).not.toEqual(initState)
    });

    // test('it calls on getQuestion prop on form submission', () => {
    //     form = wrapper.find('form');
    //     wrapper.setState({ noOfQuestion: '5'})
    // })

    test('it has 1 Link', () => {
        let links = wrapper.find('Link');
        expect(links).toHaveLength(1)
    })
})