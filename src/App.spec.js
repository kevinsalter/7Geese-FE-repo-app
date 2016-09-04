import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import App from './App';


const ORIGINAL_REPO_LIST_FIXTURE = [
  {name: "repo-1"},
  {name: "repo-2"},
  {name: "repo-3"},
  {name: "repo-4"},
  {name: "test-name-example"},
];

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('should return the correct repo name when state.originalList is filtered by name', () => {
      const wrapper = shallow(<App />);
      wrapper.setState({originalList: ORIGINAL_REPO_LIST_FIXTURE});
      const searchResult = wrapper.instance().getFilteredList('test');

      expect(searchResult[0].name).toBe('test-name-example');
  });
});
