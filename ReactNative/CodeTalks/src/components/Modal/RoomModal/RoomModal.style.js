import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';
import colors from './../../../styles/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: normalize(200, 'height'),
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {justifyContent: 'flex-end', margin: 0},
});
