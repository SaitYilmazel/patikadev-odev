import React from 'react';
import {View, TextInput} from 'react-native';

import styles from './Input.style';

export default function Input({
  value,
  placeholder,
  isSecure = false,
  onChangeText,
  multiline = false,
}) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        value={value}
        multiline={multiline}
        autoCapitalize="none"
        secureTextEntry={isSecure}
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
    </View>
  );
}
