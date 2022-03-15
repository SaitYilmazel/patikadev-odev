import {StyleSheet} from 'react-native';

export default {
  primary: StyleSheet.create({
    container: {
      backgroundColor: 'dodgerblue',
      padding: 10,
      margin: 10,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      color: '#fff',
      fontWeight: 'bold',
    },
  }),
  secondary: StyleSheet.create({
    container: {
      borderColor: 'dodgerblue',
      borderWidth: 2,
      padding: 10,
      margin: 10,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      color: 'dodgerblue',
      fontWeight: 'bold',
    },
  }),
};
