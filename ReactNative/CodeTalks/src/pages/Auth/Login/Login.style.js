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

  footer_container: {
    alignItems: 'center',
  },

  title: {
    fontSize: normalize(30),
    fontWeight: 'bold',
    color: colors.darkPurple,
    textAlign: 'center',
  },

  image: {
    marginVertical: normalize(30, 'width'),
  },

  forgotPasswordButton: {
    alignItems: 'flex-end',
    marginRight: 5,
    marginBottom: 10,
  },

  forgotPasswordText: {
    fontSize: normalize(14),
  },

  googleButton: {
    width: 212,
    height: 48,
    marginTop: 10,
  },
});
