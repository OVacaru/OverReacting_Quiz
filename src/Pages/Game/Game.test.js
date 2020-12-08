import Game from './index';
import { shallow } from 'enzyme';

describe('Game', () => {
    let wrapper;
    const stub = {
        questions: 0,
        questionID: 101
    }
    beforeEach(() => {
        wrapper = shallow(<Game.WrappedComponent {...stub}/>)
    });

    test('it renders', () => {
        let header = wrapper.find('#gamePage');
        expect(header).toHaveLength(1);
    });

    // test('it diplays final message when all questions have been asked ', () => {
        
    // })
})