import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  inner_container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000',
  },
  content_container: {flexDirection: 'row'},
  info_container: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  artist: {color: '#000'},
  year: {
    fontSize: 11,
    marginLeft: 10,
  },
  sold_container: {
    flex: 1,
    justifyContent: 'center',
  },
  sold: {
    alignSelf: 'flex-end',
    borderWidth: 1,
    borderColor: 'red',
    padding: 3,
    borderRadius: 5,
    color: 'red',
    fontSize: 11,
  },
});
