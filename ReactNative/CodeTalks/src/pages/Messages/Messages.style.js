import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';
import colors from './../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 70,
  },
  userContainer: {flex: 1, marginTop: 50, justifyContent: 'flex-end'},
  flatlist: {marginBottom: 60},
  footer_container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    marginLeft: 10,
    zIndex: 999,
  },
});
