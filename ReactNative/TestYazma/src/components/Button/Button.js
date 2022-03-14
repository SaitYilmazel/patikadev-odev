import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import styles from './Button.style';

export default function Button({title, onPress, thema = 'primary'}) {
  return (
    <TouchableOpacity
      testID="button-touchable"
      style={styles[thema].container}
      onPress={onPress}>
      <Text testID="button-title" style={styles[thema].title}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
