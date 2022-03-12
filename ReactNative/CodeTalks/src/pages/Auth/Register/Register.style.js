import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';
import colors from './../../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  header_container: {
    marginTop: normalize(50, 'height'),
  },
  body_container: {},
  title: {
    fontSize: normalize(30),
    fontWeight: 'bold',
    color: colors.darkPurple,
    textAlign: 'center',
  },
  image: {
    marginVertical: normalize(30, 'width'),
  },
});
