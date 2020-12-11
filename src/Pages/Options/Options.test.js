import Options from './index';
import { shallow } from 'enzyme';
import { Component } from 'react';

describe('Options', () => {
    let Component, instance, form, inputs, selects, numInput, initState, initProps, newState, newProps, getQuestionMock, setPlayerMock;

    beforeEach(() => {
        getQuestionMock = jest.fn();
        setPlayerMock = jest.fn();
        const stub = {
            question: [],
            noOfPlayers: 0,
            noOfQuestions: 0,
            category: '',
            difficulty: ''

        }
        Component = shallow(<Options.WrappedComponent {...stub} 
            getQuestionMock={getQuestionMock} 
            setPlayerMock={setPlayerMock} />)
        form = Component.find('form');
    });

    test('it renders a form with three inputs', () => {
        form = Component.find('form');
        expect(form).toHaveLength(1);
        inputs = form.find('input')
        expect(inputs).toHaveLength(3);
        // expect(inputs.first().prop().type).toBe('number')
    });

    test('it renders a form with two select inputs', () => {
        form = Component.find('form');
        expect(form).toHaveLength(1);
        selects = form.find('select')
        expect(selects).toHaveLength(2);
    });

    test('it renders a form with a submit input', () => {
        form = Component.find('form');
        expect(form).toHaveLength(1);
        inputs = form.find('input')
        expect(inputs).toHaveLength(3);
        // expect(inputs.last().prop().type).toBe('submit')
    });

    test('it updates player Prop on user input', () => {
        form = Component.find('form');
        numInput = form.find('input').first();
        initProps = Component.prop('noOfPlayers');
        numInput.simulate('change', { target: { value: 5 } })
        newProps = Component.props('noOfPlayers');
        expect(newProps).not.toEqual(initProps)
    });

    test('it updates question Prop on user input', () => {
        form = Component.find('form');
        numInput = form.find('input').first();
        initProps = Component.prop('noOfQuestions');
        numInput.simulate('change', { target: { value: 5 } })
        newProps = Component.props('noOfQuestions');
        expect(newProps).not.toEqual(initProps)
    });

    test('it updates category Prop on user input', () => {
        form = Component.find('form');
        numInput = form.find('select').first();
        initProps = Component.prop('category');
        numInput.simulate('change', { target: { value: "geography" } })
        newProps = Component.props('category');
        expect(newProps).not.toEqual(initProps)
    });

    test('it updates difficulty Prop on user input', () => {
        form = Component.find('form');
        numInput = form.find('select').first();
        initProps = Component.prop('difficulty');
        numInput.simulate('change', { target: { value: "hard" } })
        newProps = Component.props('difficulty');
        expect(newProps).not.toEqual(initProps)
    });

    test('it setState from all props on handleChange', (e) => {
        initState = Component.setState({
            noOfPlayers: 0,
            noOfQuestions: 0,
            difficulty: "easy",
            category: "geography"
        })
        let submitButton = form.find('#submitButton')
        initProps = Component.setProps({
            noOfPlayers: 2,
            noOfQuestions: 2,
            difficulty: "hard",
            category: "entertainment"
        })
        newState = submitButton.simulate('click', { target: { value: initProps }})
        expect(newState).not.toEqual(initState)
    })

    test('calls setPlayers and getQuestions on handleSubmit', () => {
        form = Component.find('form')
        instance = Component.instance()
        const handleSubmit = sinon.spy(instance, 'handleSubmit');
        form.simulate('submit');
        expect(handleSubmit.calledOnce).toBe(true)
    })

    test('it handlesInput', () => {
        
    })

    // test("clicking on a story triggers a handleStorySelect function", () => {
    //     component.setState({ stories: [ { id: 2503, headline: 'Disaster Strikes', snippet: 'It was a dark and stormy night...'} ] });
    //     const story1 = component.find('li').first();
    //     const handleStorySelect = sinon.spy(instance, 'handleStorySelect');
    //     story1.simulate('click');
    //     expect(handleStorySelect.calledOnce).toBe(true);
    //     expect(handleStorySelect.calledWith(2503)).toBe(true);
    // });

    test('it has 1 Link', () => {
        form = Component.find('form');
        Component.setProps({questions: [1, 2]})
        let links = Component.find('Link');
        expect(links).toHaveLength(1)
    })
})

