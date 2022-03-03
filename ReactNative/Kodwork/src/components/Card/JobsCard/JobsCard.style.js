import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#cbcbcb',
    padding: 10,
  },
  title: {fontSize: 18, fontWeight: 'bold', color: '#000'},
  company: {color: '#000'},
  location: {
    padding: 2,
    paddingHorizontal: 5,
    backgroundColor: '#ee534f',
    alignSelf: 'flex-start',
    color: '#fff',
    borderRadius: 10,
    fontWeight: 'bold',
  },
  level: {textAlign: 'right', color: '#ee534f', fontWeight: 'bold'},
});
