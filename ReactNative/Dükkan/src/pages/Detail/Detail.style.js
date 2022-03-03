import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {},
  image_container: {padding: 20, backgroundColor: '#fff'},
  body_container: {
    padding: 10,
  },
  image: {height: height / 3, resizeMode: 'contain'},
  title: {fontWeight: 'bold', fontSize: 25},
  desc: {fontStyle: 'italic', marginVertical: 10},
  price: {fontWeight: 'bold', fontSize: 25, textAlign: 'right'},
});
