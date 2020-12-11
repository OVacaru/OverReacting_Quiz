import { shallow } from 'enzyme';
import Player from './index';

describe('Player', () => {
    let wrapper, player, renderTableHeaderMock, renderTableDataMock;

    beforeEach(()=> {
        renderTableHeaderMock = jest.fn();
        renderTableDataMock = jest.fn();
        let stub = {
            player: []
        }
        wrapper = shallow(<Player.WrappedComponent 
            {...stub}
            renderTableHeader={renderTableHeaderMock}
            renderTableData={renderTableDataMock}/>)
    })

    it('renders', ()=>{
        player = wrapper.find('#playerComponent')
        expect(player).toHaveLength(1)
    });

    it('calls renderTableHeader', () => {
        expect(renderTableHeaderMock.mock.calls.length).toBe(1)
    })

    it('calls renderTableData', () => {
        expect(renderTableDataMock.mock.calls.length).toBe(1)
    })
})

// describe('renderTableHeader', () => {

// })

// describe('renderTableData', () => {
    
// })