import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {flex: 1, margin: 10, borderRadius: 10, overflow: 'hidden'},
  image: {height: 150},
  title_container: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.5)',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 3,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'right',
    marginHorizontal: 10,
    fontSize: 20,
  },
});
