import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 15,
    paddingVertical: normalize(30, 'height'),
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  image: {
    alignSelf: 'center',
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: normalize(30, 'height'),
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textName: {
    fontWeight: 'bold',
    color: '#000',
  },
  textValue: {
    fontWeight: 'normal',
  },
});
