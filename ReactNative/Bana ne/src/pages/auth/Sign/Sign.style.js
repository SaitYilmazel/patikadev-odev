import {StyleSheet, Dimensions} from 'react-native';
import normalize from 'react-native-normalize';
import colors from '../../../styles/colors';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  header: {
    color: colors.lightBlue,
    marginHorizontal: 20,
    fontSize: normalize(90),
  },
  logo: {
    width: width * 0.9,
    height: height / 3,
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: colors.white,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
  },
});
