import {StyleSheet, Dimensions} from 'react-native';
import colors from './../../../styles/colors';
import normalize from 'react-native-normalize';

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 15,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: normalize(height / 3),
    width: '100%',
  },
  modal: {justifyContent: 'flex-end', margin: 0},
});
