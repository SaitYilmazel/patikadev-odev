import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';
import colors from './../../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  inner_container: {
    flex: 1,
    alignItems: 'center',
    marginTop: normalize(50, 'height'),
  },
  title: {
    fontSize: normalize(30),
    fontWeight: 'bold',
    color: colors.darkPurple,
  },
  welcomeImg: {
    marginVertical: normalize(30, 'width'),
  },
});
