import Options from './index';
import { shallow } from 'enzyme';

describe('Options', () => {
    let wrapper, form, inputs, selects, numInput, initState, newState;

    beforeEach(() => {
        wrapper = shallow(<Options />)
        form = wrapper.find('form');
    });

    test('it renders a form with two number inputs', () => {
        expect(form).toHaveLength(1);
        inputs = form.find('input')
        expect(inputs).toHaveLength(2);
        expect(inputs.first().props().type).toBe('number')
    });

    test('it renders a form with two select inputs', () => {
        expect(form).toHaveLength(1);
        selects = form.find('select')
        expect(selects).toHaveLength(2);
    });

    test('it renders a form with a submit input', () => {
        expect(form).toHaveLength(1);
        inputs = form.find('input')
        expect(inputs).toHaveLength(1);
        expect(inputs.last().props().type).toBe('submit')
    });

    test('it updates player state on user input', () => {
        numInput = form.find('input').first();
        initState = wrapper.state('totalPlayers');
        numInput.simulate('change', { target: { value: 5 } })
        newState = wrapper.state('totalPlayers');
        expect(newState).not.toEqual(initState)
    });

    test('it updates question state on user input', () => {
        numInput = form.find('input').second();
        initState = wrapper.state('noOfQuestions');
        numInput.simulate('change', { target: { value: 5 } })
        newState = wrapper.state('noOfQuestions');
        expect(newState).not.toEqual(initState)
    });

    test('it updates category state on user input', () => {
        numInput = form.find('select').first();
        initState = wrapper.state('category');
        numInput.simulate('change', { target: { value: "geography" } })
        newState = wrapper.state('category');
        expect(newState).not.toEqual(initState)
    });

    test('it updates difficulty state on user input', () => {
        numInput = form.find('select').first();
        initState = wrapper.state('difficulty');
        numInput.simulate('change', { target: { value: "hard" } })
        newState = wrapper.state('difficulty');
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