import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  banner_Image: {
    height: height / 5,
    width: width / 2,
  },
});
