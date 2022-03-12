import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';
import colors from './../../styles/colors';

const base_style = StyleSheet.create({
  container: {
    backgroundColor: colors.darkPurple,
    paddingHorizontal: 30,
    width: normalize(300, 'width'),
    height: normalize(50, 'height'),
    borderRadius: 30,
    justifyContent: 'center',
    marginVertical: normalize(15),
  },
  text: {
    color: colors.white,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default {
  primary: StyleSheet.create({
    ...base_style,
    container: {
      ...base_style.container,
      backgroundColor: colors.darkPurple,
    },
    text: {
      ...base_style.text,
    },
  }),
  secondary: StyleSheet.create({
    ...base_style,
    container: {
      ...base_style.container,
      backgroundColor: colors.lightPurple,
    },
    text: {
      ...base_style.text,
      color: colors.darkPurple,
    },
  }),
};
