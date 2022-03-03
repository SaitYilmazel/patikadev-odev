import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {flex: 1},
  title_container: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#c4c4c4',
  },
  image: {height: height / 3},
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#a52a2a',
  },
  area: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#a52a2a',
  },
  instructions: {paddingHorizontal: 10, paddingTop: 5, color: '#000'},
  button: {
    height: 52,
    backgroundColor: 'red',
    justifyContent: 'center',
    margin: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
