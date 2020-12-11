import Results from './index';
import { shallow } from 'enzyme';

describe('Results', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Results />)
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