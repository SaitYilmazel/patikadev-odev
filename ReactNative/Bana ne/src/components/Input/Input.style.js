import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.lightGray,
    borderRadius: 10,
    paddingLeft: 15,
    margin: 10,
    marginHorizontal: 20,
  },
  textInput: {
    flex: 1,
    padding: normalize(10),
  },
});
