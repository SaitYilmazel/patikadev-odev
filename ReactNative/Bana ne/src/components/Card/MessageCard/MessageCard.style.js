import {StyleSheet} from 'react-native';
import colors from './../../../styles/colors';
import normalize from 'react-native-normalize';

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: colors.lightBlue,
  },
  inner_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  user: {
    color: colors.white,
    fontSize: normalize(14),
  },
  date: {
    color: colors.white,
    fontStyle: 'italic',
    fontSize: normalize(14),
  },
  content: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: normalize(15),
  },
  footer: {
    alignItems: 'flex-end',
  },
  dislike_container: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    padding: 3,
    paddingHorizontal: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  dislike_count_container: {
    backgroundColor: colors.lightBlue,
    padding: 3,
    borderRadius: 20,
    marginRight: 5,
  },
  dislike_text: {
    color: colors.lightBlue,
    fontWeight: 'bold',
  },
  dislike_count_text: {
    color: colors.white,
    fontWeight: 'bold',
  },
});
