import Home from './index';
import { shallow } from 'enzyme';

describe('Home', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Home />)
    });

    test('it renders', () => {
        let header = wrapper.find('h1');
        expect(header).toHaveLength(1);
    });

    test('it has 1 Link', () => {
        let links = wrapper.find('Link');
        expect(links).toHaveLength(1)
    })
})