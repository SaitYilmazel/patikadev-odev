import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './FloatingButton.style';

export default function FloatingButton({onPress, icon, iconSize, iconColor}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon name={icon} size={iconSize} color={iconColor} />
    </TouchableOpacity>
  );
}
