import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';
import colors from './../../styles/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.lightPurple,
    width: normalize(300, 'width'),
    height: normalize(50),
    borderRadius: normalize(30),
    marginVertical: normalize(10),
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 10,
  },
  textInput: {
    flex: 1,
    paddingLeft: 15,
  },
});
