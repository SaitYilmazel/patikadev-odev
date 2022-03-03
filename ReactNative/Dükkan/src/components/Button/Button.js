import React from 'react';
import {View, TouchableOpacity, Text, ActivityIndicator} from 'react-native';
import styles from './Button.style';

export default function Button({text, onPress, loading}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} disabled={loading}>
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.title}>{text}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}
