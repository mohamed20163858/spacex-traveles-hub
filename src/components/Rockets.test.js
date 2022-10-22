import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import '@testing-library/jest-dom';
import Rockets from './rocketCard';

function TestRockets() {
  return (
    <Provider store={store}>
      <Rockets />
    </Provider>
  );
}
it('renders correctly', () => {
  const tree = renderer
    .create(<TestRockets />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
test('simulate reserve a rocket ', () => {
  // ARRANGE
  render(<TestRockets />);

  // ACT
  userEvent.click(screen.getByText('Reserve Rocket'));
  // Arrange
  const result = screen.getByTestId('rocket-reserved');
  // ASSERT
  expect(result).toBeInTheDocument();
});
