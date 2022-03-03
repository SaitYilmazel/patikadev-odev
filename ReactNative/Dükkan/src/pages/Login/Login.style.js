import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {flex: 1, backgroundColor: '#64b5f6'},
  logo_container: {flex: 1, justifyContent: 'center'},
  body_container: {flex: 1},
  logo: {
    flex: 1,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  errorText: {textAlign: 'center', color: 'red'},
});
