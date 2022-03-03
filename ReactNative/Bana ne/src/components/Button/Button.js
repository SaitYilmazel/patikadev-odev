import React from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';

import styles from './Button.style';

export default function Button({text, onPress, loading, theme = 'primary'}) {
  return (
    <View style={styles[theme].container}>
      <TouchableOpacity style={styles[theme].button} onPress={onPress}>
        {loading ? (
          <ActivityIndicator color={styles[theme].loading.color} />
        ) : (
          <Text style={styles[theme].buttonText}>{text}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}
