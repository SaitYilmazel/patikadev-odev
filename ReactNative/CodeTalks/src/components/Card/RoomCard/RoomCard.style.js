import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';
import colors from './../../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    height: normalize(150, 'height'),
    borderWidth: 3,
    borderColor: colors.lightPurple,
    margin: 15,
    padding: 20,
    borderRadius: 10,
    justifyContent: 'center',
  },
  text: {
    color: colors.darkPurple,
    fontSize: normalize(25),
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
