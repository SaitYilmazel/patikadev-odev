import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebeff1',
    borderRadius: 10,
    margin: 10,
    width: Dimensions.get('window').width / 2.3,
  },
  inner_container: {
    flex: 1,
    padding: 10,
    paddingTop: 5,
  },
  image_container: {
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    height: Dimensions.get('window').height / 3.5,
    resizeMode: 'contain',
    backgroundColor: '#fff',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000',
  },
  price: {
    flex: 1,
    marginTop: 5,
    textAlignVertical: 'bottom',
  },
  stock: {
    marginTop: 3,
    fontWeight: 'bold',
    fontSize: 14,
    color: 'red',
  },
});
