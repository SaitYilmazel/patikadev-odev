import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    height: normalize(50, 'height'),
    width: normalize(50, 'width'),
    borderRadius: 25,
    backgroundColor: colors.darkPurple,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    zIndex: 999,
  },
});
