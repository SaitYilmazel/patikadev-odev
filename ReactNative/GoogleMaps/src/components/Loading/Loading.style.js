import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: '#fff',
    padding: 12,
    bottom: normalize(150, 'height'),
    alignSelf: 'center',
    borderRadius: 10,
    borderColor: '#e0e0e0',
  },
});
