import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {margin: 10},
  button: {
    padding: 12,
    borderRadius: 10,
    backgroundColor: '#7da453',
  },
  buttonPressed: {
    padding: 12,
    borderRadius: 10,
    backgroundColor: '#36474f',
  },
  text: {
    color: '#fff',
  },
  textPressed: {
    color: 'gray',
    textDecorationLine: 'line-through',
  },
});
