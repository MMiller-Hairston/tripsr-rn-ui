import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../src/Button';

test('Button renders correctly', () => {
  const tree = renderer
    .create(<Button text="Test" onPress={() => {}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('Button renders correctly with primary type', () => {
  const tree = renderer
    .create(<Button text="Test" onPress={() => {}} type="primary" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('Button renders correctly with facebook type', () => {
  const tree = renderer
    .create(<Button text="Test" onPress={() => {}} type="facebook" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('Button renders correctly with google type', () => {
  const tree = renderer
    .create(<Button text="Test" onPress={() => {}} type="google" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
