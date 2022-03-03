import {StyleSheet} from 'react-native';
import {color} from 'react-native-reanimated';
import colors from '../../styles/colors';

const base_style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    margin: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    backgroundColor: colors.lightBlue,
  },
  button: {flex: 1},
  buttonText: {
    textAlign: 'center',
    color: colors.white,
    fontWeight: 'bold',
  },
  loading: {
    color: colors.white,
  },
});

export default {
  primary: StyleSheet.create({
    ...base_style,
    container: {
      ...base_style.container,
      backgroundColor: colors.lightBlue,
    },
  }),

  secondary: StyleSheet.create({
    ...base_style,
    container: {
      ...base_style.container,
      backgroundColor: colors.white,
      borderWidth: 2,
      borderColor: colors.lightBlue,
    },
    buttonText: {
      ...base_style.buttonText,
      color: colors.lightBlue,
    },
    loading: {
      ...base_style.loading,
      color: colors.lightBlue,
    },
  }),
};
