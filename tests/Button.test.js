import React from 'react';
import renderer from 'react-test-renderer';
import { Button } from '../src/Button';

test('Button renders correctly', () => {
  const tree = renderer
    .create(<Button text="Test" onPress={() => {}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
