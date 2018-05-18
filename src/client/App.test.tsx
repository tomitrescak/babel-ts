import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as renderer from 'react-test-renderer';

import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders snapshot', () => {
  const component = renderer.create(<App />);
  const root = component.root;

  expect(component).toMatchSnapshot();

  // const button = root.findByType('button');
  // button.props.onClick();

  // expect(component).toMatchSnapshot();
});
