import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';
import colors from '../../../styles/colors';

export default StyleSheet.create({
  container: {
    width: normalize(280),
    margin: 10,
    borderRadius: 10,
    backgroundColor: colors.darkPurple,
    padding: 5,
  },
  userContainer: {
    width: normalize(280),
    margin: 10,
    borderRadius: 10,
    backgroundColor: colors.darkPurple,
    padding: 5,
    alignSelf: 'flex-end',
  },
  inner_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  user: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: normalize(14),
    marginBottom: 5,
  },
  date: {
    color: colors.white,
    fontStyle: 'italic',
    fontSize: normalize(12),
  },
  content: {
    color: colors.white,
    fontSize: normalize(15),
  },
  footer: {
    alignItems: 'flex-end',
  },
  like_container: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    padding: 3,
    paddingHorizontal: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  like_count_container: {
    backgroundColor: colors.darkPurple,
    padding: 3,
    borderRadius: 20,
    marginRight: 5,
  },
  like_text: {
    color: colors.darkPurple,
    fontWeight: 'bold',
  },
  like_count_text: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: normalize(12),
  },
});
