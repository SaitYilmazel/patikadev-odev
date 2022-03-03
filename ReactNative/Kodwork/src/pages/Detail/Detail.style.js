import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {flex: 1},
  header_container: {margin: 10},
  text_container: {flexDirection: 'row', marginVertical: 5},
  html_container: {
    padding: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#cbcbcb',
  },
  footer_container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  title: {marginBottom: 5, fontSize: 24, fontWeight: 'bold'},
  text: {color: '#ee534f', fontWeight: 'bold', fontSize: 15},
  value: {color: '#000', fontWeight: 'bold', fontSize: 15},
  detail: {textAlign: 'center', fontSize: 22, fontWeight: 'bold', marginTop: 5},
  button: {
    flex: 1,
    flexDirection: 'row',
    height: 52,
    backgroundColor: '#ee534f',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 5,
  },
});
