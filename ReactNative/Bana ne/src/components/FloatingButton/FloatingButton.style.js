import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import normalize from 'react-native-normalize';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: colors.darkGreen,
    width: normalize(50),
    height: normalize(50),
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
