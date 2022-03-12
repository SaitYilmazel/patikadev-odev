import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './Input.style';

export default function Input({
  placeholder,
  onChangeText,
  icon,
  value,
  secret = false,
  multiline = false,
}) {
  const [isSecurity, setSecurity] = useState(true);

  return (
    <View style={styles.container}>
      <Icon name={icon} size={25} color="#700BEF" />
      <TextInput
        style={styles.textInput}
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        placeholderTextColor="rgba(112, 11, 239, 0.3)"
        secureTextEntry={secret && isSecurity}
        autoCapitalize="none"
        multiline={multiline}
      />
      {secret && (
        <Icon
          name={isSecurity ? 'eye-off-outline' : 'eye-outline'}
          size={20}
          color="#700BEF"
          onPress={() => setSecurity(!isSecurity)}
        />
      )}
    </View>
  );
}
