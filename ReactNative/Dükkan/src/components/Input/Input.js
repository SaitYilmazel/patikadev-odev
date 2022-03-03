import React from 'react';
import {View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './Input.style';

export default function Input({
  placeholder,
  onChangeText,
  value,
  iconName,
  isSecure,
}) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={isSecure}
      />
      <Icon name={iconName} size={25} color="gray" />
    </View>
  );
}
