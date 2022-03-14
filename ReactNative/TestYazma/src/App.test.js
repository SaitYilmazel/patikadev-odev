import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';

import App from './App';

test('should match with snapshot', () => {
  const comp = render(<App />);
  expect(comp).toMatchSnapshot();
});

test('should add ıtem to list', () => {
  const comp = render(<App />);
  const textInput = comp.getByTestId('input');
  fireEvent.changeText(textInput, 'test element');

  const submitButton = comp.getByTestId('button-touchable');
  fireEvent.press(submitButton);

  const list = comp.getByTestId('list').props;

  expect(list.data.length).toBe(1);
});


test('should not add item if input is empty', () => {
  const comp = render(<App />);

  const submitButton = comp.getByTestId('button-touchable');
  fireEvent.press(submitButton);

  const list = comp.getByTestId('list').props;
  expect(list.data.length).toBe(0);
});