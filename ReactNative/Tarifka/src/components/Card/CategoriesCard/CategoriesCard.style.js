import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ebeff1',
    margin: 10,
    padding: 10,
    borderColor: '#a2a2a2',
    borderWidth: 1,
    borderRadius: 10,
    borderTopLeftRadius: 45,
    borderBottomLeftRadius: 45,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  title: {fontSize: 20, color: '#000', marginLeft: 20},
});
