import Game from './index';
import { shallow } from 'enzyme';

describe('Game', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Game />)
    });

    test('it renders', () => {
        let header = wrapper.find('h1');
        expect(header).toHaveLength(1);
    });

    // test('it diplays final message when all questions have been asked ', () => {
        
    // })
})