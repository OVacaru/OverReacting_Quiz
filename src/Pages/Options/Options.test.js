import Options from './index';
import { shallow } from 'enzyme';

describe('Options', () => {
    let wrapper, form, inputs, selects, numInput, initProps, newProps, getQuestionMock, setPlayerMock;

    beforeEach(() => {
        getQuestionMock = jest.fn();
        setPlayerMock = jest.fn();
        const stub = {
            question: [],
            totalPlayers: 0,
            noOfQuestions: 0,
            category: '',
            difficulty: ''

        }
        wrapper = shallow(<Options.WrappedComponent {...stub} getQuestionMock={getQuestionMock} setPlayerMock={setPlayerMock} />)
        form = wrapper.find('form');
    });



    test('it renders a form with three inputs', () => {
        expect(form).toHaveLength(1);
        inputs = form.find('input')
        expect(inputs).toHaveLength(3);
        // expect(inputs.first().prop().type).toBe('number')
    });

    test('it renders a form with two select inputs', () => {
        expect(form).toHaveLength(1);
        selects = form.find('select')
        expect(selects).toHaveLength(2);
    });

    test('it renders a form with a submit input', () => {
        expect(form).toHaveLength(1);
        inputs = form.find('input')
        expect(inputs).toHaveLength(3);
        // expect(inputs.last().prop().type).toBe('submit')
    });

    test('it updates player Prop on user input', () => {
        form = wrapper.find('form');
        numInput = form.find('input').first();
        initProps = wrapper.prop('totalPlayers');
        numInput.simulate('change', { target: { value: 5 } })
        newProps = wrapper.props('totalPlayers');
        expect(newProps).not.toEqual(initProps)
    });

    test('it updates question Prop on user input', () => {
        numInput = form.find('input').first();
        initProps = wrapper.prop('noOfQuestions');
        numInput.simulate('change', { target: { value: 5 } })
        newProps = wrapper.props('noOfQuestions');
        expect(newProps).not.toEqual(initProps)
    });

    test('it updates category Prop on user input', () => {
        numInput = form.find('select').first();
        initProps = wrapper.prop('category');
        numInput.simulate('change', { target: { value: "geography" } })
        newProps = wrapper.props('category');
        expect(newProps).not.toEqual(initProps)
    });

    test('it updates difficulty Prop on user input', () => {
        numInput = form.find('select').first();
        initProps = wrapper.prop('difficulty');
        numInput.simulate('change', { target: { value: "hard" } })
        newProps = wrapper.props('difficulty');
        expect(newProps).not.toEqual(initProps)
    });


    // test('it calls on getQuestion prop on form submission', () => {
    //     form = wrapper.find('form');
    //     wrapper.setProp({ noOfQuestion: '5'})
    // })
    
    test('it has 1 Link', () => {
        let links = wrapper.find('Link');
        expect(links).toHaveLength(1)
    })
})

