import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#eeeeee',
    borderColor: '#bdbdbd',
    borderWidth: 1,
    borderRadius: 10,
    overflow: 'hidden',
    margin: 10,
    flexDirection: 'row',
  },
  image: {
    width: 100,
    minHeight: 100,
    resizeMode: 'contain',
    backgroundColor: 'white',
  },
  body_container: {flex: 1, padding: 10, justifyContent: 'space-between'},
  title: {fontWeight: 'bold', fontSize: 16},
  price: {textAlign: 'right', fontStyle: 'italic'},
});
