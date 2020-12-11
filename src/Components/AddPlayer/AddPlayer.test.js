import { shallow } from 'enzyme'
import AddPlayer from './index'

describe('AddPlayer', () =>{
    let wrapper, inputs, handleInputChangeMock;

    beforeEach(() => {
        handleInputChangeMock = jest.fn();
        
        wrapper = shallow(<AddPlayer
            counter={0}
            handleInputChange={handleInputChangeMock}
        />);
        inputs = wrapper.find('input')
    });

    it('renders', () => {
        expect(inputs).toHaveLength(1)
    })

    it('calls handleInputChange on change', (e) => {
        inputs.simulate('change', {preventDefault: jest.fn()})
        expect(handleInputChangeMock.mock.calls.toHaveLength).toBe(1)
    })
})